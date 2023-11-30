import './App.css';
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import Gallery from '../Gallery/Gallery'
import Footer from '../Footer/Footer'

const App = () => {
  return (
    <div className='app-container'>
      <Header />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
