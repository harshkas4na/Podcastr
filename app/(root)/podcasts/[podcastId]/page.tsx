import React from 'react'

const podcastdetails = ({params}:{params:{podcastId:string}}) => {
  return (
    <p className='text-white-1'>podcastDetails for {params.podcastId}</p>
  )
}

export default podcastdetails