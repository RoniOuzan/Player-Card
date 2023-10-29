import { useState } from "react";
import PlayerCard from "../card/PlayerCard";
import PlayerSelector from "../card/PlayerSelector";
import "./PlayerPreview.scss";

interface Props {
  data: any;
}

const PlayerPreview: React.FC<Props> = ({ data }) => {
  const [player, setPlayer] = useState("");

  return (
    <div className="PlayerPreview">
      <PlayerSelector data={data} setPlayer={setPlayer} />
      <PlayerCard data={data} player={player} height={500} />
    </div>
  );
} 

export default PlayerPreview;