import { useQuery } from "react-query";
import axios from "axios";
import { useState } from "react";
import { useSuperHeroData } from "../hooks/useSuperHeroData";

export const RQSuperHeroesPage = () => {
  const [interval, setInterval] = useState(3000);
  const onSuccess = (data) => {
    if (data?.data.length >= 4 && interval === 3000) {
      setInterval(0);
    }
  };
  const response = useSuperHeroData(onSuccess, interval);

  if (response.isLoading) {
    return <h1>Loading...</h1>;
  }
  if (response.isError) {
    return <h1>{response.error.message}</h1>;
  }

  return (
    <div>
      <h2>RQSuperHeroPage</h2>
      {response.data?.data.map((hero) => {
        return <h3>{hero.name}</h3>;
      })}
    </div>
  );
};
