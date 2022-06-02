import { useState } from "react";
import { useFetch } from "./hooks/useFetch";

type Repository = {
  full_name: string;
  description: string;
};

function App() {
  const [data, loading, error] = useFetch<Repository[]>("generation/1");

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
