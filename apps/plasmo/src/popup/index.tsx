import { useState } from "react";

import { TRPCProvider } from "~utils/trpc";

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
        }}>
        <Welcome />
        <input onChange={(e) => setData(e.target.value)} value={data} />
        <footer>Crafted by @PlamoHQ</footer>
      </div>
    </TRPCProvider>
  );
}

export default IndexPopup;
