import "./Overall.scss";

interface Props {
  data: any;
  width: number;
}

const Overall: React.FC<Props> = ({data, width}) => {
  return <div className="Overall">
    <div className="Overall__Rating" style={{fontSize: 312.5*width/330 + "%"}} >{data["Overall"]}</div>
    <div className="Overall__Position" style={{fontSize: 200*width/330 + "%"}} >{data["Position"]}</div>
  </div>
}

export default Overall;