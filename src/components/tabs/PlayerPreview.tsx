import { useState } from "react";
import PlayerCard from "../card/PlayerCard";
import PlayerSelector from "../card/PlayerSelector";
import "./PlayerPreview.scss";

interface Props {
  data: any;
  open: boolean;
}

const PlayerPreview: React.FC<Props> = ({ data, open }) => {
  const [player, setPlayer] = useState("");

  return (
    <div className="PlayerPreview">
      <PlayerSelector data={data} setPlayer={setPlayer} open={open} />
      <PlayerCard data={data} player={player} height={(open && window.innerWidth < 1000) ? 350 : 500} />
    </div>
  );
} 

export default PlayerPreview;