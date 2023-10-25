import Stats from "./texts/Stats";
import Name from "./texts/Name";
import Overall from "./texts/Overall";
import Logos from "./logos/Logos";
import "./PlayerCard.scss";

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
  player: string;
  width: number;
}

const PlayerCard: React.FC<Props> = ({data, player, width}) => {
  return (
    <div className="PlayerCard" style={{width: width}}>
      <img src= "images\cards\DefaultCard.png" draggable={false} style={{width: "100%"}} />
      <Overall
        data={
          data && getPlayerIndex(data, player) >= 0
            ? data[getPlayerIndex(data, player)]
            : []
        }
        width={width}
      />
      <Name name={player} width={width} />
      <Stats
        stats={
          data && getPlayerIndex(data, player) >= 0
            ? data[getPlayerIndex(data, player)]
            : []
        }
        width={width}
      />
      <Logos />
    </div>
  );
};

export default PlayerCard;
