import React, { Component } from 'react';
import './App.css';
import Member from './components/Member';
import Button from './components/Button';

const family = {
  member1: {
    name: 'Cyril',
    age: 41
  },
  member2: {
    name: 'Johan',
    age: 38
  },
  member3: {
    name: 'Marine',
    age: 36
  },
  member4: {
    name: 'Anouk',
    age: 2
  },
  member5: {
    name: 'Airi',
    age: 28
  }
}

class App extends Component {
  // line 7 creates a bug I don't know how to fix on
  // the console/index.js/line 11 below {title}
  // const { title } = this.props

  state = {
    family
  }

  handleClick = (num) => {
    const family = { ...this.state.family }
    family.member1.age += num
    this.setState({ family })
}
  handleChange = event => {
    const family = { ...this.state.family }
    const name = event.target.value
    family.member1.name = name
    console.log(name)
    this.setState({ family })
}

render() {
  const { family } = this.state
  return (
      <div className="App">
        <h1>React App</h1>
        <input value={family.member1.name} onChange={this.handleChange} type="text" />
        <Member
          name= {family.member1.name}
          age= {family.member1.age} />
        <Member
          name= {family.member2.name}
          age= {family.member2.age} />
        <Member
          name= {family.member3.name}
          age= {family.member3.age} />
        <Member
          name= {family.member4.name}
          age= {family.member4.age}>
          <span>I am a Bouk</span>
        </Member>
        <Member
          name= {family.member5.name}
          age= {family.member5.age} />
        <Button aging={()=> this.handleClick(2)} />
      </div>
    );
  }
}

export default App
