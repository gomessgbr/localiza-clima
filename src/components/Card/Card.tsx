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
  return (
    <div className="card-area">
      <div className="card-forecast-area">
        <h1>{ICardProps.location}</h1>
        <img src={ICardProps.icon} alt="icon" />
        <p className="currently-forecast">{ICardProps.currently}°C</p>
        <p> {ICardProps.description}</p>
        <div className="max-min-area">
          <p>Máx: {ICardProps.max}°</p>
          <p>Mín: {ICardProps.min}°</p>
        </div>
      </div>
    </div>
  );
}
