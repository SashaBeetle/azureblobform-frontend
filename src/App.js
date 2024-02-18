import './App.css';
import Header from './components/Header';
import Button from './components/Button';
import TextInput from './components/TextInput';

function App() {
  return (
    
    <div className="App" >
      <header className="App-header">
        <Header />
      </header>
      <body className='App-body'>
        <div className='App-input'><TextInput /></div>
        <div className='App-button'><Button /></div>

        
      </body>
     
    </div>
  );
}

export default App;
