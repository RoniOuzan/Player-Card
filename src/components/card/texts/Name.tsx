import "./Name.scss";

interface Props {
  name: string;
}

const Stats: React.FC<Props> = ({name}) => {
  return <div className="Name">
    <div>{name}</div>
  </div>;  
}

export default Stats;