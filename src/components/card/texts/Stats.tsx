import { Flex } from "antd";
import Stat from "./Stat";
import "./Stats.scss";

interface Props {
  stats: any;
}

const Stats: React.FC<Props> = ({stats}) => {
  return <div className="Stats">
    <Flex justify="space-evenly">
      <Stat name="PAC" rating={stats["Pace"]} />
      <Stat name="SHO" rating={stats["Shooting"]} />
      <Stat name="PAS" rating={stats["Passing"]} />
      <Stat name="DRI" rating={stats["Dribbling"]} />
      <Stat name="DEF" rating={stats["Defending"]} />
      <Stat name="PHY" rating={stats["Physicality"]} />
    </Flex>
  </div>;  
}

export default Stats;