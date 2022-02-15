import React from 'react';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: 'Nindle',
        age: 18
      }
    }
    this.addAge = this.addAge.bind(this);
  }
  render () {
    const { user } = this.state
    console.log(user.name);
    console.log(user.age);
    return (
      <div>
        <h2>我叫{user.name}今年{user.age}岁了</h2>
        <h3 onClick={this.addAge}>年龄增加器</h3>
      </div>
    )
  }
  addAge () {
    this.setState({
      user: {
        name: 'Nindleto',
        age: 20
      }
    })
  }
}


export default Demo