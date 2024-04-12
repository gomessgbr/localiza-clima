import "./styles.css";

interface ICardProps {
  location: string;
  icon: string;
  max: number;
  min: number;
  currently: number;
  description: string;
}
export function Card(ICardProps: ICardProps) {
  const max = Math.floor(ICardProps.max);
  const min = Math.floor(ICardProps.min);
  const currently = Math.floor(ICardProps.currently);
  return (
    <div className="card-area">
      <div className="card-forecast-area">
        <h1>{ICardProps.location}</h1>
        <img src={ICardProps.icon} alt="icon" />
        <p className="currently-forecast">{currently}°C</p>
        <p>{ICardProps.description}</p>
        <div className="max-min-area">
          <p>Máx: {max}°</p>
          <p>Mín: {min}°</p>
        </div>
      </div>
    </div>
  );
}
