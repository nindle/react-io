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
    console.log("构造器");
  }
  //挂载前调用
  componentWillMount () {
    console.log('Count---挂载前调用');
  }

  //组件完毕调用
  componentDidMount () {
    console.log('Count---组件完毕调用');
  }

  //组件卸载时调用
  componentWillUnmount () {
    console.log('Count---组件卸载时调用');
  }

  //组件更新的“阀门”
  shouldComponentUpdate () {
    console.log('Count---组件更新的“阀门””');
    return true
  }

  //组件将要更新时调用
  componentWillUpdate () {
    console.log('Count---组件将要更新时调用');
  }

  //组件更新完毕调用
  componentDidUpdate () {
    console.log('Count---组件更新完毕调用');
  }

  //若state的值在任何时候都取决于props，那么可以使用getDerivedStateFromProps
  static getDerivedStateFromProps (props, state) {
    console.log('getDerivedStateFromProps', props, state);
    return null
  }

  //在更新之前获取快照
  getSnapshotBeforeUpdate () {
    console.log('getSnapshotBeforeUpdate');
    return 'atguigu'
  }

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
        <h3 onClick={this.addAge}>年龄增加器</h3>
        <h3 onClick={this.uninstall}>组件卸载</h3>
        {/* ref回调函数式 */}
        <input ref={c => this.inputValue = c} onBlur={this.handleBlur} type="number" placeholder="失去焦点获取数据" />
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
    alert(this.inputValue.value)
    this.inputValue.value = ''
  }
}


export default Demo