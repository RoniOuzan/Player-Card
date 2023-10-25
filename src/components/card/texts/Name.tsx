import "./Name.scss";

interface Props {
  name: string;
  width: number;
}

const Stats: React.FC<Props> = ({name, width}) => {
  return <div className="Name">
    <div style={{width: "100%", fontSize: 200*width/330 + "%"}}>{name}</div>
  </div>;  
}

export default Stats;