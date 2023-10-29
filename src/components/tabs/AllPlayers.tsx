import PlayerCard from "../card/PlayerCard";
import "./AllPlayers.scss";

interface Props {
  data: any;
}

const AllPlayers: React.FC<Props> = ({ data }) => {
  return (
    <div className="Players">
      {data && Object.entries(data.sort((a: { [x: string]: number; }, b: { [x: string]: number; }) => b["Overall"] - a["Overall"])).map(([index]) => (
        <PlayerCard data={data} player={data[index]["Player"]} height={Math.max((window.innerWidth / 10) / 0.6875, 192)} />
      ))}
    </div>
  );
}

export default AllPlayers;