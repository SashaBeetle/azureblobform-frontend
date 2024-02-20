import './App.css';
import Header from './components/Header';
import { UploadFile, MyTextField } from './components/UploadFile';
import TextInput from './components/TextInput';

function App() {
  return (
    
    
    <div className="App" >
      <header className="App-header">
        <Header />
      </header>
      <body className='App-body'>
        {/* <MyTextField /> */}
        <TextInput />
        <UploadFile />
      </body>
    </div>
  );
}

export default App;
