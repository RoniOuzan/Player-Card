import Stats from "./texts/Stats";
import Name from "./texts/Name";
import Overall from "./texts/Overall";
import Logos from "./logos/Logos";

export const getPlayerIndex = (data: Array<any>, name: string) => {
  let result = -1;
  data.forEach((player, index) => {
    if (player["Player"] === name) {
      result = index;
    }
  });
  return result;
};

interface Props {
  data: any;
  player: string
}

const PlayerCard: React.FC<Props> = ({data, player}) => {
  return (
    <div style={{ position: "relative" }}>
      <img src= "images\cards\DefaultCard.png" draggable={false} />
      <Overall
        data={
          data && getPlayerIndex(data, player) >= 0
            ? data[getPlayerIndex(data, player)]
            : []
        }
      />
      <Name name={player} />
      <Stats
        stats={
          data && getPlayerIndex(data, player) >= 0
            ? data[getPlayerIndex(data, player)]
            : []
        }
      />
      <Logos />
    </div>
  );
};

export default PlayerCard;
