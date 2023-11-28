// CategoryComponent.js
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Products from "./ProductCard";
import "./style.css";

const CategoryButton = ({ category, onClick }) => (
  <div className="Category_Items">
    <button onClick={onClick}>{category}</button>
  </div>
);

const CategoryComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [allProducts, setAllProducts] = useState([]);
  const [electronics, setElectronics] = useState([]);
  const [womensClothing, setWomensClothing] = useState([]);
  const [jewelry, setJewelry] = useState([]);
  const [mensClothing, setMensClothing] = useState([]);
  

  useEffect(() => {
    const fetchData = async (category, setData) => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch ${category} data. Status: ${response.status}`);
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(`Error fetching ${category} data:`, error);
        setData([]);
      }
    };

    fetchData('all', setAllProducts);
    fetchData('electronics', setElectronics);
    fetchData("women's clothing", setWomensClothing);
    fetchData('jewelery', setJewelry);
    fetchData("men's clothing", setMensClothing);
  }, []);

  const mapProducts = (categoryData) =>
    categoryData.map((product) => (
      <div className="column" key={product.id}>
        <Link to={`/products/${product.id}`}>
          <Products title={product.title} image={product.image} price={product.price} />
        </Link>
      </div>
    ));

  return (
    <div>
      <h2 className="Category_title">PRODUCT OVERVIEW</h2>
      <div className="Category_Container">
        <CategoryButton category="All Products" onClick={() => setSelectedCategory('all')} />
        <CategoryButton category="Men" onClick={() => setSelectedCategory("men's clothing")} />
        <CategoryButton category="Women" onClick={() => setSelectedCategory("women's clothing")} />
        <CategoryButton category="Electronics" onClick={() => setSelectedCategory('electronics')} />
        <CategoryButton category="Jewelry" onClick={() => setSelectedCategory('jewelery')} />
      </div>

      <div className="Container">
        <div className="Row">
          {selectedCategory === 'all' && mapProducts(allProducts)}
          {selectedCategory === 'electronics' && mapProducts(electronics)}
          {selectedCategory === "women's clothing" && mapProducts(womensClothing)}
          {selectedCategory === 'jewelery' && mapProducts(jewelry)}
          {selectedCategory === "men's clothing" && mapProducts(mensClothing)}
        </div>
      </div>
    </div>
  );
};

export default CategoryComponent;
