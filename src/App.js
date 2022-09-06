// import logo from './logo.svg';
import './App.css';
import Member from './components/Member';

function App() {
  return (
    <div className="App">
      <h1>React App</h1>
      <Member name= 'Cyril'/>
      <Member name= 'Johan'/>
      <Member name= 'Marine'/>
      <Member name= 'Anouk'>
        <p>I am a Bouk</p>
      </Member>
      <Member name= 'Airi'/>
    </div>
  );
}

export default App;
