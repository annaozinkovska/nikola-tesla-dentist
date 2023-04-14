import React, {useState} from "react";
import Product from "./components/Product";

function App () {

  const productsList = [
  {name: 'Iphone', price: 800, id: 1},
  {name: 'Watch', price: 100, id: 2},
  ];
  const [products, setProducts] = useState(productsList)
  const [newProducts, setNewProducts] = useState({name: '', price: 0.01, id: 3})

  const changeName = (e)=>{
   setNewProducts((prev)=>({...prev, name: e.target.value}))
  }

  const changePrice = (e)=>{
    setNewProducts((prev)=>({...prev, price: e.target.value}))
  }
  const checkName = () => {
     if( newProducts.name.trim().length>1 &&
    !newProducts.name.trim().match(/[0-9]/g))
    {
      return true;
    } else {
      setNewProducts({ name: '',
       price: newProducts.price, id: uuid() });
      return false;
      }
  }

  // const addProducts = () => {
  //   let key = Math.random();
  //   setNewProducts((prev)=>({...prev, id: key}))
  //   setProducts((prev) => ([...prev, newProducts]))
  
  const checkPrice = () => {
    if (Number(newProducts.price) > 0) {
      return true;
    } else {
      setNewProducts({name: newProducts.name, price: '', id: uuid()});
      return false;
      }
  }
  const addProducts = () => {
    if (checkName() && checkPrice()) {
      setProducts((prev) => ([...prev, newProducts]))
      setNewProducts({name: '', price: '', id: uuid()});
    } else {
      setNewProducts({name: newProducts.name, price: newProducts.price, id: uuid()});
      return ;
    }}
    
  // }

  const removeProduct = (id) => {
    const newList =  products.filter(product => product.id !== id);
    setProducts(newList);
  }



return (
<div className="wrapper">
  <div className="add">
    <label>Product name</label>
    <input onInput={changeName} type="text" />
    <label>Product price</label>
    <input onInput={changePrice} type="number" />
    <button onClick={addProducts} type="button">Add</button>
  </div>
  <div className="list">
    {products.map(product => <Product onRemove={
      removeProduct} key={product.id} id={product.id} 
    name={product.name} price={`${product.price} $`} />)}
  </div>
</div> 
);

    }
export default App;




