import './App.css';
import CartList from './components/CartList/CartList';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Total from './components/Total/Total';

function App() {
  return (
    <div>
      <Header />
      <CartList />
      <Total />
      <Footer />
    </div>
  );
}

export default App;


