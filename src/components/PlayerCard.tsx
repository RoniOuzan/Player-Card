import "./PlayerCard.scss";
import Fetcher from "./Fetcher";
import PlayerSelector from "./PlayerSelector";
import { useEffect, useState } from "react";
import Stats from "./texts/Stats";
import Name from "./texts/Name";
import Overall from "./texts/Overall";

export const getPlayerIndex = (data: Array<any>, name: string) => {
  let result = -1;
  data.forEach((player, index) => {
    if (player["Player"] === name) {
      result = index;
    }
  });
  return result;
};

const PlayerCard = () => {
  const data = Fetcher();

  const [player, setPlayer] = useState("");

  useEffect(() => {
    if (data) {
      console.log(data[0]);
    }
  }, [data]);

  return (
    <div className="PlayerCard">
      <PlayerSelector data={data} setPlayer={setPlayer} />
      <div style={{ position: "relative" }}>
        <img src="src\images\cards\DefaultCard.png" draggable={false} />
        <Overall data={data && getPlayerIndex(data, player) >= 0 ? data[getPlayerIndex(data, player)] : []} />
        <Name name={player} />
        <Stats stats={data && getPlayerIndex(data, player) >= 0 ? data[getPlayerIndex(data, player)] : []} />
      </div>
    </div>
  );
};

export default PlayerCard;
