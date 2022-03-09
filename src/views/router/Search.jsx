import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Search () {
  const [Search] = useSearchParams()
  return (
    <div className="content">
      <h2>{`我叫${Search.get('name')}今年18岁了`}</h2>
    </div>
  )
}
