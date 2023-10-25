import { Flex } from "antd";
import "./Logos.scss";

const Logos = () => {
  return <div className="Logos">
      <Flex justify="space-around" style={{width: "100%"}}>
        <img className="Logo" src="images\logos\IsraelFlag.png" draggable={false} />
        <img className="Logo" src="images\logos\VassilegueLogo.png" draggable={false} />
        <img className="Logo" src="images\logos\BumbleBLogo.png" draggable={false} />
      </Flex>
    </div>;
}

export default Logos;