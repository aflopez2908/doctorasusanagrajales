import React from 'react';

interface Props {
  title: string;
  short: string;
  image: string;
  href: string;
  icon: string; // URL de icono
}

const ServiceCard: React.FC<Props> = ({ title, short, image, href, icon }) => {
  return (
    <a
      href={href}
      className="block bg-white rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-[#eef3f7] flex items-center justify-center text-[#163c60] ring-1 ring-[#d7e0ea]">
            <img src={icon} alt={title} loading="lazy" className="w-12 h-12 sm:w-16 sm:h-16 object-contain drop-shadow-md" />
          </div>
          <h3 className="text-lg font-semibold text-[#163c60]">{title}</h3>
        </div>

        <p className="text-sm text-gray-500 min-h-[3.2rem]">{short}</p>

        <div className="mt-6 text-sm font-medium text-[#163c60]">Ver más +</div>
      </div>
    </a>
  );
};

export default ServiceCard;
