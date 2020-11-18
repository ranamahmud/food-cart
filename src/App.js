import { Card } from 'react-bootstrap';
import './App.css';
import CartList from './components/CartList/CartList';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Total from './components/Total/Total';

function App() {
  return (
    <div>
      <Header />

      <Card
        style={{
          borderRadius: '20px',
          margin: "20px",
          paddingTop: "30px",
          paddingBottom: "30px"
        }}
      >
        <CartList />
        <Total />
      </Card>
      <Footer />
    </div>
  );
}

export default App;


