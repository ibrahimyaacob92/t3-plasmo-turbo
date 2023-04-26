import React from "react";
import { useState } from "react";
import { trpc } from "~utils/trpc";

type Props = {};

const Todos = (props: Props) => {
  const [newTodo, setNewTodo] = useState("");

  const utils = trpc.useContext();

  const { data: listOfTodos } = trpc.todo.getAll.useQuery();
  const { mutate } = trpc.todo.createTodo.useMutation({
    onSuccess: () => {
      utils.todo.getAll.invalidate();
      setNewTodo("");
    },
  });

  return (
    <div>
      <div>
        <h5>Todos</h5>
        {listOfTodos?.map((todo) => (
          <p key={todo.id}>{todo.todo}</p>
        ))}
      </div>
      <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button onClick={() => mutate({ todo: newTodo })}>Add Todo</button>
    </div>
  );
};

export default Todos;
