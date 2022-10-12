import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList.js';
function App() {
  const productList = [
    {
      price: 99999,
      name: "Iphone",
      qty: 0,
    },
    {
      price: 9999,
      name: "oneplus",
      qty: 0,
    }
  ]
  return (
    <>
      <Navbar />
      <main className='container mt-5'>
        <ProductList productList={productList} />
      </main>
    </>
  );
}

export default App;
