import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";
import "./Header.scss";

interface Props {
  data: any;
  open: boolean;
  setOpen: (isOpen: boolean) => void;
}

const Header: React.FC<Props> = ({ open, setOpen }) => {
  return (
    <header className="Header">
      <Flex justify="flex-start" align="center" gap={10}>
        <br></br>
        <Button type="text" onClick={() => setOpen(!open)}>
          {open ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
        </Button>
        <div className="Title">
          Vassileague - Player Card
        </div>
      </Flex>
    </header>
  );
};

export default Header;
