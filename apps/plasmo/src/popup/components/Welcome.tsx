import React from "react";

import { trpc } from "~utils/trpc";

type Props = {};

const Welcome = (props: Props) => {
  const { data } = trpc.example.hello.useQuery({ text: "hekllo" });

  return (
    <div>
      <h1>
        Welcome to the T3 <a href="https://www.plasmo.com">Plasmo</a> Extension!
      </h1>
      <p>{data?.greeting}</p>
    </div>
  );
};

export default Welcome;
