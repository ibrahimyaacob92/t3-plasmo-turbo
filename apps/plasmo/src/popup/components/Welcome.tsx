import { useUser } from "@clerk/chrome-extension";
import React from "react";
import { trpc } from "~utils/trpc";

type Props = {};

const Welcome = (props: Props) => {
  const { user } = useUser();
  const { data: greeting } = trpc.todo.hello.useQuery({
    text: user?.primaryEmailAddress?.emailAddress || "Anon",
  });

  return (
    <div>
      <h1>Welcome to the T3 Plasmo Turbo Extension!</h1>
      <p>{greeting}</p>
    </div>
  );
};

export default Welcome;
