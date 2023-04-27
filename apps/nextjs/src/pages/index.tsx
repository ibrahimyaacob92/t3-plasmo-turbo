import styles from "./index.module.css";
import { SignInButton, useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const [newTodo, setNewTodo] = useState("");
  const { user } = useUser();
  const utils = api.useContext();
  const { data: greeting } = api.todo.hello.useQuery({
    text: user?.fullName || "Random Person",
  });
  const { data: listOfTodos } = api.todo.getAll.useQuery();

  const { mutate } = api.todo.createTodo.useMutation({
    onSuccess: () => {
      utils.todo.getAll.invalidate();
      setNewTodo("");
    },
  });

  return (
    <>
      <Head>
        <title>T3 Plasmo Turbo App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 id="title" className={styles.title}>
            T3 Plasmo Turbo App
          </h1>
          {user ? (
            <span className={styles.showcaseText}>
              Sign In As: {user.primaryEmailAddress?.emailAddress}{" "}
            </span>
          ) : (
            <SignInButton>
              <button>Sign In</button>
            </SignInButton>
          )}
          <p className={styles.showcaseText}>
            {greeting ? greeting : "Loading tRPC query..."}
          </p>
          <div>
            <h5 className={styles.showcaseText}>Todos</h5>
            {listOfTodos?.map((todo) => (
              <p key={todo.id} className={styles.showcaseText}>
                {todo.todo} by {todo.createdBy}
              </p>
            ))}
          </div>
          <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
          <button onClick={() => mutate({ todo: newTodo })}>Add Todo</button>
        </div>
      </main>
    </>
  );
};

export default Home;
