import { useState } from "react";
import { TRPCProvider } from "~utils/trpc";
import Todos from "./components/Todos";
import Welcome from "./components/Welcome";

function IndexPopup() {
  const [data, setData] = useState("");

  return (
    <TRPCProvider>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: 16,
          paddingTop: 0,
          width: "300px",
        }}>
        <Welcome />
        <Todos />
      </div>
    </TRPCProvider>
  );
}

export default IndexPopup;
