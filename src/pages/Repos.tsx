import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

export type Repository = {
  full_name: string;
  description: string;
};

export function Repos() {
  const {
    data: repositories,
    isFetched,
    error,
  } = useQuery<Repository[]>(
    "repos",
    async () => {
      const response = await axios.get(
        "https://api.github.com/users/diego3g/repos"
      );

      return response.data;
    },
    {
      staleTime: 1000 * 60, // 1 minute
    }
  );

  return (
    <ul>
      {isFetched &&
        repositories?.map((repository: Repository) => {
          return (
            <li key={repository.full_name}>
              <Link to={`/repos/${repository.full_name}`}>
                {repository.full_name}
              </Link>
              <li>{repository.description}</li>
            </li>
          );
        })}
    </ul>
  );
}
