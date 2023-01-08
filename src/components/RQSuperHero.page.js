import React from 'react'
import useSpecificHeroData from "../hooks/useSpecificHeroData"
import { useParams } from 'react-router-dom'

function RQSuperHeroPage() {
  const params = useParams()
  const response = useSpecificHeroData(params.heroId);
  return (
    <div>{response.data?.data.name}</div>
  )
}

export default RQSuperHeroPage