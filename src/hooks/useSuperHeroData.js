import axios from "axios";
import { useQuery } from "react-query";

export const useSuperHeroData = (onSuccess, interval)=>{
    return useQuery("super-hero", () => {
        return axios.get("http://localhost:4000/superheroes");
      },{
        refetchInterval: interval,
        onSuccess,
        refetchIntervalInBackground:true,
      });
}