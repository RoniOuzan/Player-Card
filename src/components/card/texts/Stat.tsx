import "./Stats.scss";

interface Props {
  name: string;
  rating: number;
}

const Stat: React.FC<Props> = ({name, rating}) => {
  return <div className="Stats__Stat">
    <div>{name}</div>
    <div className="Stats__Stat__Rating">{rating}</div>
  </div>
}

export default Stat;