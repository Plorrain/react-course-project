import React, { Component } from 'react';
import './App.css';
import Member from './components/Member';

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

  handleClick = () => {
    console.log('Click')
}

render() {
  const { family } = this.state
  return (
      <div className="App">
        <h1>React App</h1>
        <Member name= {family.member1.name} />
        <Member name= {family.member2.name} />
        <Member name= {family.member3.name} />
        <Member name= {family.member4.name}>
          <span>I am a Bouk</span>
        </Member>
        <Member name= {family.member5.name} />
        <button onClick={this.handleClick}>
          Add a year
        </button>
      </div>
    );
  }
}

export default App
