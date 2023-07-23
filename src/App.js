import './App.scss';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Header/>
    <Main/>
    <Footer/>
    </div>
  );
}

export default App;
