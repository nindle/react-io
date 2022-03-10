import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Router () {
  const { state } = useLocation()
  return (
    <div className="content">
      <h2>{state.name}</h2>
    </div>
  )
}
