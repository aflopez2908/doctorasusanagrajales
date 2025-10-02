import React from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

/**
 * ResultSlider (React)
 * Props:
 *  - before, after: string (rutas de imagen)
 *  - altBefore, altAfter: string
 *  - label: string (p.ej. 'Abdominoplastia')
 *  - title: string
 *  - description: string
 *  - procedure: string (texto explicativo del procedimiento)
 *  - className: string (clases adicionales)
 */
const ResultSlider = ({
  before= '',
  after= '',
  altBefore = 'Antes',
  altAfter = 'Después',
  label = '',
  title = '',
  description = '',
  procedure = '',
  className = ''
}) => {
  return (
    <article
      className={`bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 ${className}`}
      aria-label={title || label || 'Comparación antes y después'}
    >
      {/* Media / Comparador */}
      <div className="relative">
        {/* Badge elegante */}
        {label ? (
          <div className="absolute z-10 top-3 left-3 bg-white/10 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-lg border border-white/8 shadow-sm">
            {label}
          </div>
        ) : null}

        <div className="w-full aspect-[4/3] bg-gray-50">
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src={before} alt={altBefore} />}
            itemTwo={<ReactCompareSliderImage src={after} alt={altAfter} />}
            style={{ height: '100%', touchAction: 'none' }}
          />
        </div>
      </div>

      {/* Texto descriptivo */}
      <div className="p-5">
        {title ? <h3 className="text-gray-900 font-semibold text-lg leading-snug">{title}</h3> : null}
        {description ? <p className="mt-2 text-sm text-gray-500">{description}</p> : null}

        {procedure ? (
          <div className="mt-4 bg-gray-50 border border-gray-100 p-3 rounded-lg">
            <h4 className="text-sm font-medium text-gray-800">Procedimiento</h4>
            <p className="mt-1 text-sm text-gray-600">{procedure}</p>
          </div>
        ) : null}
      </div>
    </article>
  );
};

export default ResultSlider;
