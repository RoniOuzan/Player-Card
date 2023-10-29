import { Flex } from "antd";
import Stat from "./Stat";
import "./Stats.scss";

interface Props {
  stats: any;
  height: number;
}

const Stats: React.FC<Props> = ({ stats, height }) => {
  return (
    <div className="Stats">
      <Flex justify="space-evenly">
        <Stat name="PAC" rating={stats["Pace"]} height={height} />
        <Stat name="SHO" rating={stats["Shooting"]} height={height} />
        <Stat name="PAS" rating={stats["Passing"]} height={height} />
        <Stat name="DRI" rating={stats["Dribbling"]} height={height} />
        <Stat name="DEF" rating={stats["Defending"]} height={height} />
        <Stat name="PHY" rating={stats["Physicality"]} height={height} />
      </Flex>
    </div>
  );
};

export default Stats;
