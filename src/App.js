import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Carousel from './Carousel';
import Buscador from './Buscador';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Carousel/>
        <Buscador />
        <Main />
        <Footer/>
      </BrowserRouter>
  </>
  );
}

export default App;
