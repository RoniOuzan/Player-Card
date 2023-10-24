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

  return <AutoComplete 
    className="PlayerSelector"
    options={options}
    onChange={setPlayer}
  />;
}

export default PlayerSelector;