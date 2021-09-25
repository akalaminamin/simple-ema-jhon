import React, { useState, useEffect } from "react";
import { addDb, getSaveData } from "../../FakeDb/FakeDb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

function Shop() {
  const [products, setProducts] = useState([]);
  const [items, setItems] = useState([]);
  const [searchValue, setSearchValue] = useState([]);

  useEffect(() => {
    fetch("./products.json")
      .then((resp) => resp.json())
      .then((data) => {
        setProducts(data);
        setSearchValue(data);
      });
  }, []);

  useEffect(() => {
    if (products.length) {
      const saveLocalStorageData = getSaveData();
      let storeData = [];
      for (let key in saveLocalStorageData) {
        const matchKeyData = products.find((product) => key === product.key);
        if (matchKeyData) {
          let quintity = saveLocalStorageData[key];
          matchKeyData.quintity = quintity;
          storeData.push(matchKeyData);
        }
      }
      setItems(storeData);
    }
  }, [products]);

  // handle search
  const handleSearch = (e) => {
    const searchText = e.target.value;
    const matchProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchValue(matchProducts);
  };
  // handle add item
  const handleAddtoCart = (singleProduct) => {
    let newItems = [...items, singleProduct];
    setItems(newItems);
    addDb(singleProduct.key);
  };
  return (
    <>
      <div className="search-box">
        <input
          className="input-field"
          type="text"
          placeholder="search product"
          onChange={handleSearch}
        />
      </div>
      <div className="shop-container">
        <div className="all-product">
          {searchValue.map((product) => (
            <Product
              key={product.key}
              handleAddtoCart={handleAddtoCart}
              singleProduct={product}
            ></Product>
          ))}
        </div>
        <div className="cart-wrapper">
          <Cart items={items}></Cart>
        </div>
      </div>
    </>
  );
}

export default Shop;
