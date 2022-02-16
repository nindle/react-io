import React from 'react';


class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        age: 18
      }
    }
    this.addAge = this.addAge.bind(this);
  }
  render () {
    const { user } = this.state
    return (
      <div>
        <h2>我叫{this.props.name.name}今年{user.age}岁了</h2>
        <h3 onClick={this.addAge}>年龄增加器</h3>
        <img className="img" src={this.props.logo} alt="" />
      </div>
    )
  }
  addAge () {
    this.setState(state=>({
      user:{
        age:state.user.age+=1
      }
    }))
  }
}


export default Demo