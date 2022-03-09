import React from 'react'
import { useParams } from 'react-router-dom'

export default function Params () {
  const { name } = useParams()
  return (
    <div className="content" >
      <h2>{`我叫${name}今年18岁了`}</h2>
    </div >
  )
}
