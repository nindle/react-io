import React, { Fragment } from 'react'
import ReactDOM from 'react-dom';
const MyContext = React.createContext()
const { Provider, Consumer } = MyContext


const Fun = () => {
  const [count, setCount] = React.useState(0)
  const inputRef = React.useRef()

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
  }, [count])

  // 卸载组件
  const onUninstall = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'));
  }

  // 通过ref拿input的值
  const getInputValue = () => {
    alert(inputRef.current.value)
  }

  return (
    <Fragment>
      <h2>{count}</h2>
      <input type="text" ref={inputRef} />
      <div onClick={onSetCount}>点我计算</div>
      <div onClick={onUninstall}>卸载组件</div>
      <div onClick={getInputValue}>拿输入框的值</div>
      <Provider value={count}>
        <B />
      </Provider>
    </Fragment>
  )
}

const B = () => {
  return (
    <div>
      从上层组件获取数据：
      <Consumer>
        {value => `拿到的数据是${value}`}
      </Consumer>
    </div>
  )
}

export default Fun