import "./Stats.scss";

interface Props {
  name: string;
  rating: number;
  height: number;
}

const Stat: React.FC<Props> = ({ name, rating, height }) => {
  return (
    <div
      className="Stats__Stat"
      style={{ fontSize: (14 / 0.6875) * (height / 500) + "px" }}
    >
      <div>{name}</div>
      <div style={{ fontSize: (23 / 0.6875) * (height / 500) + "px" }}>{rating}</div>
    </div>
  );
};

export default Stat;
