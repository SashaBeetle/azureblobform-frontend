import './App.css';
import Header from './components/Header';
import { UploadFile } from './components/UploadFile';
import TextInput from './components/TextInput';
import Form from './components/Form'



function App() {
  
  return (
    
    
    <div className="App" >
      <header className="App-header">
        <Header />
      </header>
      <body className='App-body'>
        <Form />
      </body>
    </div>
  );
}

export default App;
