import React, { useState } from 'react';
import ServiceCard from './ServiceCard.tsx';
import MotionWrapper from './MotionWrapper.tsx';

export interface Service {
  id: string;
  slug?: string;
  data: {
    category: string;
    title: string;
    short: string;
    image: string;
    icon: string;
  };
}

interface Props {
  services: Service[];
}

const ServicesTabs: React.FC<Props> = ({ services }) => {
  // Extraer categorías únicas
  const categories = Array.from(new Set(services.map(s => s.data.category)));

  // Estado de pestaña activa
  const [activeTab, setActiveTab] = useState<string>(categories[0]);

  // Filtrar servicios por categoría
  const filteredServices = services.filter(s => s.data.category === activeTab);

  return (
    <section id="servicios" className="py-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* Tabs personalizadas */}
        <MotionWrapper animation="slideUp" duration={0.8}>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((cat, i) => (
              <MotionWrapper key={cat} animation="scaleIn" duration={0.6} delay={0.2 + i * 0.1}>
                <button
                  className={`
                    px-6 py-2 rounded-full font-semibold transition 
                    duration-300 ease-in-out
                    ${
                      cat === activeTab
                        ? 'bg-[#143B5A] text-white shadow-lg shadow-primary/30'
                        : 'bg-white text-primary border border-primary hover:bg-primary hover:text-[#4784b7]'
                    }
                  `}
                  onClick={() => setActiveTab(cat)}
                >
                  {cat}
                </button>
              </MotionWrapper>
            ))}
          </div>
        </MotionWrapper>

        {/* Contenido filtrado */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((s, i) => (
            <MotionWrapper key={s.id} animation="fadeIn" duration={0.6} delay={0.4 + i * 0.1}>
              <ServiceCard
                icon={s.data.icon}
                title={s.data.title}
                short={s.data.short}
                image={s.data.image}
                href={`/servicios/${s.slug ?? s.id}`}
              />
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesTabs;
