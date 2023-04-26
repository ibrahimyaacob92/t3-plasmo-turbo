import React from "react";
import { trpc } from "~utils/trpc";

type Props = {};

const Welcome = (props: Props) => {
  const { data: greeting } = trpc.todo.hello.useQuery();

  return (
    <div>
      <p>{greeting}</p>
    </div>
  );
};

export default Welcome;
