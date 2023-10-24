import "./Overall.scss";

interface Props {
  data: any;
}

const Overall: React.FC<Props> = ({data}) => {
  return <div className="Overall">
    <div className="Overall__Rating" >{data["Overall"]}</div>
    <div className="Overall__Position" >{data["Position"]}</div>
  </div>
}

export default Overall;