import React from 'react'
const Fun = () => {
  const [count, setCount] = React.useState(0)

  const onSetCount = () => {
    setCount(count => count += 1)
  }
  //模仿生命周期
  React.useEffect(() => {
    console.log("初始化调用");
    return () => {
      console.log('卸载前调用');
    }
    // 写[]表示调用一次，不写每次更新都会调用，[]里面写值表示监听值的变化
  }, [])

  return (
    <div>
      <h2>{count}</h2>
      <div onClick={onSetCount}>点我计算</div>
    </div>
  )
}
export default Fun