import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Carousel from './Carousel';
import Buscador from './Buscador';
import BuscadorProvider from './context/BuscadorContext';

const App = () => {
  return (
      <BuscadorProvider>
        <BrowserRouter>
          <Header />
          <Carousel/>
          <Main />
          <Footer/>
        </BrowserRouter>
      </BuscadorProvider>
  );
}

export default App;
