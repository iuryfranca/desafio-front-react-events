import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { Repository } from "./Repos";

export function Repo() {
  const params = useParams();
  const currentRepository = params["*"] as string;
  const queryClient = useQueryClient();

  async function handleChangeRepositoryDescription() {
    const previousRepo = queryClient.getQueryData<Repository[]>("repos");
    const newRepos = previousRepo?.map((repo) => {
      if (repo.full_name === currentRepository) {
        return { ...repo, description: "New description" };
      } else {
        return repo;
      }
    });

    queryClient.setQueryData("repos", newRepos);
    // await queryClient.invalidateQueries(["repos"]);
  }
  return (
    <>
      <h1>Hello World</h1>
      <button onClick={handleChangeRepositoryDescription}>
        Change repository description
      </button>
    </>
  );
}
