import React from "react";
import { trpc } from "~utils/trpc";

type Props = {};

const Welcome = (props: Props) => {
  const { data: greeting } = trpc.todo.hello.useQuery();

  return (
    <div>
      <h1>Welcome to the T3 Plasmo Turbo Extension!</h1>
      <p>{greeting}</p>
    </div>
  );
};

export default Welcome;
