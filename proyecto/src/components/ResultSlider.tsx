import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

type ResultSliderProps = {
  before: string;
  after: string;
  altBefore?: string;
  altAfter?: string;
  label?: string;
  title?: string;
  description?: string;
};

function ResultSlider({
  before,
  after,
  altBefore = 'Antes',
  altAfter = 'Después',
  label = 'Abdominoplastia',
  title = 'Transformación Abdominal',
  description = 'Resultado a los 6 meses post cirugía'
}: ResultSliderProps) {
  return (
    <div className="card w-full max-w-sm bg-base-100 shadow-lg rounded-xl overflow-hidden">
      {/* Imagen con etiqueta */}
      <div className="relative">
        <div className="absolute top-3 left-3 bg-blue-900 text-white text-xs font-semibold px-4 py-1 rounded-md shadow">
          {label}
        </div>
        <ReactCompareSlider
          itemOne={<ReactCompareSliderImage src={before} alt={altBefore} />}
          itemTwo={<ReactCompareSliderImage src={after} alt={altAfter} />}
        />
      </div>

      {/* Cuerpo */}
      <div className="p-4">
        <h3 className="text-primary font-semibold text-base">{title}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
    </div>
  );
}

export default ResultSlider;
