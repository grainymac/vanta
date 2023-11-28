import './App.css';
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import Gallery from '../Gallery/Gallery'
import Footer from '../Footer/Footer'

const App = () => {
  return (
    <>
    <Header />
    <main>
      <Hero />
      <Gallery />
    </main>
    </>
  );
}

export default App;
