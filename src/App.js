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
  },
}

function App() {
  // line 7 creates a bug I don't know how to fix on
  // the console/index.js/line 11 below {title}
  // const { title } = this.props

  // state = {
  //   family
  // }

  return (
      <div className="App">
        <h1>React App</h1>
        <Member name= 'Cyril' />
        <Member name= 'Johan'/>
        <Member name= 'Marine'/>
        <Member name= 'Anouk'>
          <span>I am a Bouk</span>
        </Member>
        <Member name= 'Airi'/>
      </div>
    );
  }


export default App
