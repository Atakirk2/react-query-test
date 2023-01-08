import { useQuery } from "react-query"
import axios from "axios"

export const ParallelQueriesPage = () => {

    const firstQuery = useQuery("super-heroes-query",()=>{
        return axios.get("http://localhost:4000/superheroes")
    })
    const secondQuery = useQuery("friends-query",()=>{
        return axios.get("http://localhost:4000/friends")
    })

    return(
        <div>
            {firstQuery.data?.data.map(hero => {
                return <div>{hero.name}</div>
            })}
            {secondQuery.data?.data.map(friend => {
                return <div>{friend.name}</div>
            })}
        </div>
    )
  }
  