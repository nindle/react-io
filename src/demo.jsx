import React from 'react';
import PropTypes from 'prop-types';

class Demo extends React.Component {
  state = {
    user: { age: 18 }
  }

  //props类型校验
  static propTypes = {
    name: PropTypes.string.isRequired, //必传
    age: PropTypes.number
  }

  static defaultProps = {
    age: 18, //默认值
  }
  
  render () {
    const { user } = this.state
    return (
      <div className='content'>
        <h2>{`我叫${this.props.name}今年${user.age}岁了`}</h2>
        <h3 onClick={this.addAge}>年龄增加器</h3>
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

  handleBlur = () => {
    alert(this.inputValue.value)
  }
}


export default Demo