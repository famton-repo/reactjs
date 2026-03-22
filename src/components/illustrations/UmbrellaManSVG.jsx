import umbrellaMan from '../../assets/umbrella_man-removebg-preview.png';

/**
 * Image illustration of a man with umbrella.
 */
export default function UmbrellaManSVG({ condition = 'Rainy' }) {
  return (
    <div className="w-[120px] h-[150px] flex items-center justify-center">
      <img 
        src={umbrellaMan} 
        alt="Weather Illustration" 
        className="w-full h-full object-contain"
      />
    </div>
  );
}
