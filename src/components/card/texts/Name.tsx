import "./Name.scss";

interface Props {
  name: string;
  height: number;
}

const Name: React.FC<Props> = ({ name, height }) => {
  return (
    <div className="Name">
      <div style={{ width: "100%", fontSize: (22 / 0.6875) * (height / 500) + "px" }}>{name}</div>
    </div>
  );
};

export default Name;
