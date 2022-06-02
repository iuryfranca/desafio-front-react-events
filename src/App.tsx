import axios from "axios";
import { useQuery } from "react-query";

type Repository = {
  full_name: string;
  description: string;
};

function App() {
  const {
    data: repositories,
    isFetched,
    error,
  } = useQuery<Repository[]>("repos", async () => {
    const response = await axios.get(
      "https://api.github.com/users/diego3g/repos"
    );

    return response.data;
  });

  return (
    <ul>
      {isFetched &&
        repositories?.map((repository: Repository) => {
          return (
            <li key={repository.full_name}>
              <strong>{repository.full_name}</strong>
              <li>{repository.description}</li>
            </li>
          );
        })}
    </ul>
  );
}

export default App;
