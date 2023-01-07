import { isError, useQuery } from "react-query";
import axios from "axios";

export const RQSuperHeroesPage = () => {
  const response = useQuery("super-hero", () => {
    return axios.get("http://localhost:4000/superheroes");
  },{
    enabled:false
  });

  if (response.isLoading) {
    return <h1>Loading...</h1>;
  }
  if (response.isError) {
    return <h1>{response.error.message}</h1>;
  }

  return (
    <div>
      <h2>RQSuperHeroPage</h2>
      <button onClick={response.refetch}>Fetch</button>
      {response.data?.data.map((hero) => {
        return <h3>{hero.name}</h3>;
      })}
    </div>
  );
};
