import React, { useState, useEffect } from "react";

  



  function App () {
    const [products, setProducts] = useState({
      coffe:0,
      sugar:0,
    });



    const [coffer, setCoffer] = useState(0);
    const [sugarr, setSugarr] = useState(0);

    const addCoffee = () => setProducts((prevState) => {
      return {
        ...prevState,
        coffe: prevState.coffe + 1
      }
    });
    const addSugar = () => setProducts((prevState) => {
          console.log(prevState);
        return {
          ...prevState,
          sugar: prevState.sugar + 1
      }
    });
    const removeCoffee = () => setProducts((prevState) => {
      if (prevState.coffe > 0) {
        return {
          ...prevState,
          coffe: prevState.coffe - 1
        }
      } else {
        
        return prevState;
      }
    });
    const removeSugar = () => setProducts((prevState) => {
      if (prevState.sugar > 0) {
        return {
          ...prevState,
          sugar: prevState.sugar - 1
        }
      } else {
        return prevState;
      }
    });



const save = () => {
  localStorage.setItem('coffe', products.coffe);
  localStorage.setItem('sugar', products.sugar);
}

const clear = () => {
    localStorage.removeItem('coffe');
    localStorage.removeItem('sugar');
    setProducts({
      coffe: 0,
      sugar: 0
    });
  }
  useEffect(()=>{
    if (localStorage.getItem('coffe')){
      setProducts({
        coffe: +localStorage.getItem('coffe'),
        sugar: +localStorage.getItem('sugar')
      });
    }
  }, []);

  useEffect(() => {
    setCoffer(products.coffe <= 1); 
  }, [products.coffe])
  useEffect(() => {
    setSugarr(products.sugar <= 1); 
  }, [products.sugar])
    

return (
  <div className="wrapper">
    <div className="list">
      <h1>Product list</h1>
      <div className='product'>
      <span>{`Coffe: ${products.coffe}`}</span>
      <button onClick={addCoffee}>Add</button>
      {!coffer && <button onClick={removeCoffee}>Remove</button>}
        </div>
        <div className='product'>
        <span>{`Sugar: ${products.sugar}`}</span>
          <button onClick={addSugar}>Add</button>
          {!sugarr && <button onClick={removeSugar}>Remove</button>}
        </div>
      <div className='save'>
          <button onClick={save}>SAVE</button>
          <button onClick={clear}>CLEAR</button>
        </div>
    </div>
  </div> 
  );
  }

export default App;
