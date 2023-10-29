import { useState } from "react";
import AllPlayers from "./tabs/AllPlayers";
import PlayerPreview from "./tabs/PlayerPreview";
import { Tabs } from "antd";
import "./Canvas.scss";

interface Props {
  data: any;
  open: boolean;
}

const Canvas: React.FC<Props> = ({ data, open }) => {
  const [activeKey, setActiveKey] = useState('all');

  const allPlayers = <AllPlayers data={data} />;
  const playerPreview = <PlayerPreview data={data} open={open} />;

  const getActiveContent = () => {
    switch (activeKey) {
      case 'all':
        return allPlayers;
      case 'preview':
        return playerPreview;
      default:
        return <></>;
    }
  }

  const tabs = [
    {
      label: "All Players",
      key: "all",
      children: allPlayers
    },
    {
      label: "Player-Preview",
      key: "preview",
      children: playerPreview
    }
  ]

  return (
    <div className="Tabs">
      {open && (
        <Tabs
          style={{ height: "100%" }}
          tabPosition="left"
          activeKey={activeKey}
          onChange={setActiveKey}
          items={tabs} />
      )}
      {getActiveContent()}
    </div>
  );
}

export default Canvas;