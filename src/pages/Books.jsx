import React from 'react'
import {useParams} from 'react-router-dom'

const Books = () => {
  const {id} = useParams();
  return (
    <div>Books {id}</div>
  )
}

export default Books