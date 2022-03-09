import React from 'react'
import { useLocation } from 'react-router-dom'
export default function State () {
  const { state } = useLocation()
  return (
    <div className="content">
      <h2>{`我叫${state.name}今年${state.age}岁了`}</h2>
    </div>
  )
}
