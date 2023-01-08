import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

function useSpecificHeroData(heroId) {
  return useQuery(["hero-query",heroId], ()=>{
    return axios.get(`http://localhost:4000/superheroes/${heroId}`)
  })
}

export default useSpecificHeroData