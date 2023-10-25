import "./Stats.scss";

interface Props {
  name: string;
  rating: number;
  width: number;
}

const Stat: React.FC<Props> = ({name, rating, width}) => {
  return <div className="Stats__Stat" style={{fontSize: 125*width/330 + "%"}}>
    <div>{name}</div>
    <div style={{fontSize: 175*width/330 + "%"}} >{rating}</div>
  </div>
}

export default Stat;