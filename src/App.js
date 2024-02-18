import './App.css';
import Header from './components/Header';
import { UploadFile } from './components/UploadFile';
import TextInput from './components/TextInput';

function App() {
  return (
    
    
    <div className="App" >
      <header className="App-header">
        <Header />
      </header>
      <body className='App-body'>
        <TextInput />
        <UploadFile />
      </body>
    </div>
  );
}

export default App;
