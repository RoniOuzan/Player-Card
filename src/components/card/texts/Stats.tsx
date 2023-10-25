import { Flex } from "antd";
import Stat from "./Stat";
import "./Stats.scss";

interface Props {
  stats: any;
  width: number;
}

const Stats: React.FC<Props> = ({stats, width}) => {
  return <div className="Stats">
    <Flex justify="space-evenly">
      <Stat name="PAC" rating={stats["Pace"]} width={width} />
      <Stat name="SHO" rating={stats["Shooting"]} width={width} />
      <Stat name="PAS" rating={stats["Passing"]} width={width} />
      <Stat name="DRI" rating={stats["Dribbling"]} width={width} />
      <Stat name="DEF" rating={stats["Defending"]} width={width} />
      <Stat name="PHY" rating={stats["Physicality"]} width={width} />
    </Flex>
  </div>;  
}

export default Stats;