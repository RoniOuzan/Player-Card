import PlayerCard from "../card/PlayerCard";
import "./AllPlayers.scss";

interface Props {
  data: any;
}

const AllPlayers: React.FC<Props> = ({ data }) => {
  return (
    <div className="Players">
      {data && Object.entries(data).map(([index]) => (
        <PlayerCard data={data} player={data[index]["Player"]} height={148} />
      ))}
    </div>
  );
}

export default AllPlayers;