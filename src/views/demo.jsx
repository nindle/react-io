import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

class Demo extends React.Component {
  /* 
     1. 初始化阶段: 由ReactDOM.render()触发---初次渲染
             1.	constructor()
             2.	getDerivedStateFromProps 
             3.	render()
             4.	componentDidMount() =====> 常用
                   一般在这个钩子中做一些初始化的事，例如：开启定时器、发送网络请求、订阅消息
     2. 更新阶段: 由组件内部this.setSate()或父组件重新render触发
             1.	getDerivedStateFromProps
             2.	shouldComponentUpdate()
             3.	render()
             4.	getSnapshotBeforeUpdate
             5.	componentDidUpdate()
     3. 卸载组件: 由ReactDOM.unmountComponentAtNode()触发
             1.	componentWillUnmount()  =====> 常用
                   一般在这个钩子中做一些收尾的事，例如：关闭定时器、取消订阅消息
    */
  state = {
    user: { age: 18 }
  }
  // 构造器
  constructor(props) {
    super(props)
    console.log("父构造器");
  }
  //挂载前调用
  componentWillMount () {
    console.log('父componentWillMount---挂载前调用');
  }

  //组件完毕调用
  componentDidMount () {
    console.log('父componentDidMount---组件完毕调用');
  }

  //组件卸载时调用
  componentWillUnmount () {
    console.log('父componentWillUnmount---组件卸载时调用');
  }

  //组件更新的“阀门”
  shouldComponentUpdate () {
    console.log('父shouldComponentUpdate---组件更新的“阀门””');
    return true
  }

  //组件将要更新时调用
  componentWillUpdate () {
    console.log('父componentWillUpdate---组件将要更新时调用');
  }

  //组件更新完毕调用
  componentDidUpdate () {
    console.log('父componentDidUpdate---组件更新完毕调用');
  }

  //若state的值在任何时候都取决于props，那么可以使用getDerivedStateFromProps
  // static getDerivedStateFromProps (props, state) {
  //   console.log('父getDerivedStateFromProps', props, state);
  //   return null
  // }

  //在更新之前获取快照
  // getSnapshotBeforeUpdate () {
  //   console.log('父getSnapshotBeforeUpdate');
  //   return 'atguigu'
  // }

  //props类型校验
  static propTypes = {
    name: PropTypes.string.isRequired, //必传
    age: PropTypes.number
  }

  //默认值
  static defaultProps = {
    age: 18,
  }

  render () {
    const { user } = this.state
    return (
      <div className='content'>
        <h2>{`我叫${this.props.name}今年${user.age}岁了`}</h2>
        <DemoData age={user.age} />
        <h3 onClick={this.addAge}>年龄增加器</h3>
        <h3 onClick={this.uninstall}>组件卸载</h3>
        {/* ref回调函数式 */}
        <input className="input" ref={c => this.inputValue = c} onBlur={this.handleBlur} type="text" placeholder="失去焦点获取数据" />
        <img className="img" src={this.props.logo} alt="" />
      </div>
    )
  }

  addAge = () => {
    this.setState(state => ({
      user: {
        age: state.user.age += 1
      }
    }))
  }

  uninstall = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }

  handleBlur = () => {
    this.setState({
      user: { age: Number(this.inputValue.value) }
    })
  }
}

class DemoData extends React.Component {
  // 构造器
  constructor(props) {
    super(props)
    console.log("子构造器");
  }
  //挂载前调用
  componentWillMount () {
    console.log('子componentWillMount---挂载前调用');
  }

  //组件完毕调用
  componentDidMount () {
    console.log('子componentDidMount---组件完毕调用');
  }

  //组件卸载时调用
  componentWillUnmount () {
    console.log('子componentWillUnmount---组件卸载时调用');
  }

  //组件更新的“阀门”
  shouldComponentUpdate () {
    console.log('子shouldComponentUpdate---组件更新的“阀门””');
    return true
  }

  //组件将要更新时调用
  componentWillUpdate () {
    console.log('子componentWillUpdate---组件将要更新时调用');
  }

  //组件更新完毕调用
  componentDidUpdate () {
    console.log('子componentDidUpdate---组件更新完毕调用');
  }

  //若state的值在任何时候都取决于props，那么可以使用getDerivedStateFromProps
  // static getDerivedStateFromProps (props, state) {
  //   console.log('子getDerivedStateFromProps', props, state);
  //   return null
  // }

  //在更新之前获取快照
  // getSnapshotBeforeUpdate () {
  //   console.log('子getSnapshotBeforeUpdate');
  //   return 'atguigu'
  // }

  render () {
    return (
      <div>
        <h2> {`Nindle是我朋友，今年${this.props.age}岁了`}</h2>
      </div>
    )
  }
}

export default Demo