import './App.css';
import Header from './components/Header';
import Form from './components/Form'
import {UploadFile} from './components/UploadFile'




function App() {
  return (   
    <div className="App" >
      <header className="App-header">
        <Header />
      </header>
      <body className='App-body'>
        <UploadFile />
      </body>
    </div>
  );
}

export default App;
