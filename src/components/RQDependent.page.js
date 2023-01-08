import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'


const fetchUser = (email) => {
    return axios.get(`http://localhost:4000/users/${email}`)
  }
  const fetchChannel = (ChannelID) => {
    return axios.get(`http://localhost:4000/channels/${ChannelID}`)
  }
export function RQDependentPage(props) {
    const user = useQuery(["user-query",props.email],()=>fetchUser(props.email))
    const channelID = user.data?.data.channelId
    const channel = useQuery(["channel-query",channelID],()=>fetchChannel(channelID),{
        enabled: !!channelID
    })

 
  return (
    <div>{channelID}{channel.data?.data.courses.map(course=>{
        return <h1>{course}</h1>
    })}</div>
  )
}

