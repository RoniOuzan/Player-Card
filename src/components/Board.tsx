import { useEffect, useState } from "react";
import Header from "./header/Header";
import "./Board.scss";
import Canvas from "./Canvas";

const Board = () => {
  const [data, setData] = useState<any>(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://script.googleusercontent.com/macros/echo?user_content_key=AZinsGsKky8REsWBIi8jdB_Tm46iZFVb2vNA_uDVPUhbLryPwIi_oFylbXk7SElDTJWRfl-dyWfudBw5arhnruU-jqXf3oMZm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnIvIcNl3-ppA_LsZpAAc14FyLfQeMnuZ2eCX22hIQdpuSGeAqgwuyo1Z3AGUuBTHDiD3zKV1UU3ppa5aMDpg1gBfZ8Yj2iis8Q&lib=MjB8_6ZTx14QmfFZF3lhvWEIQqeymobcZ"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <Header data={data} open={open} setOpen={setOpen} />
      <div className="Board">
        <Canvas data={data} open={open} />
      </div>
    </div>
  );
};

export default Board;
