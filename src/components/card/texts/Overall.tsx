import "./Overall.scss";

interface Props {
  data: any;
  height: number;
}

const Overall: React.FC<Props> = ({ data, height }) => {
  return (
    <div className="Overall">
      <div
        className="Overall__Rating"
        style={{ fontSize: (34 / 0.6875) * (height / 500) + "px" }}
      >
        {data["Overall"]}
      </div>
      <div
        className="Overall__Position"
        style={{ fontSize: (22 / 0.6875) * (height / 500) + "px" }}
      >
        {data["Position"]}
      </div>
    </div>
  );
};

export default Overall;
