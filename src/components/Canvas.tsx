import { useEffect, useState } from "react";
import Fetcher from "./card/Fetcher";
import PlayerCard from "./card/PlayerCard";
import PlayerSelector from "./card/PlayerSelector";
import Title from "./Title";
import "./Canvas.scss";

const Canvas = () => {
  const data = Fetcher();

  const [player, setPlayer] = useState("");

  useEffect(() => {
    if (data) {
      console.log(data[0]);
    }
  }, [data]);

  return <div>
    <Title />
    <div className="Canvas">
      <PlayerSelector data={data} setPlayer={setPlayer} />
      <PlayerCard data={data} player={player} />
    </div>
  </div>;
}

export default Canvas;