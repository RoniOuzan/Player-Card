import { AutoComplete } from "antd";
import "./PlayerSelector.scss";

interface Props {
  data: Array<any>;
  setPlayer: (player: string) => void;
}

const PlayerSelector: React.FC<Props> = ({data, setPlayer}) => {
  let options: Array<any> = [];
  if (data) {
    data.forEach((element, index) => {
      const playerName = element["Player"];

      if (playerName !== "") {
        options.push();
        options[index] = { value: playerName};
      }
    });
  }

  return (
    <div className="PlayerSelector">
      <div style={{color: "#F5D409", fontFamily: "Bold-Font"}}>
        Enter a player:
      </div>
      <AutoComplete 
        placeholder="Player Name"
        options={options}
        onChange={setPlayer}
        style={{
          width: "100%",
          color: "red",
        }}
      />
    </div>
  );
}

export default PlayerSelector;