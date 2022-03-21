import React from 'react'
const Fun = () => {
  const [name, setName] = React.useState('nindle')
  const onSetName = () => {
    setName('Ninlde')
  }
  return (
    <div>
      <h2>{name}</h2>
      <div onClick={onSetName}>点我改名</div>
    </div>
  )
}
export default Fun