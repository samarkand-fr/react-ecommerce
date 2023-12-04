import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Products from "./index";
import "./style.css";

const CategoryButton = ({ category, onClick }) => (
  <div className="Category_Items">
    <button onClick={onClick}>{category}</button>
  </div>
);

const CategoryComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [allProducts, setAllProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }
        const data = await response.json();
        setAllProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setAllProducts([]);
      }
    };

    fetchData();
  }, []);

  const mapProducts = (categoryData) =>
    categoryData.map((product) => (
      <div className="column" key={product.id}>
        <Link to={`/products/${product.id}`}>
          <Products
            title={product.title}
            image={product.image}
            price={product.price}
          />
        </Link>
      </div>
    ));

  const filteredProducts =
    selectedCategory.toLowerCase() === "all"
      ? allProducts
      : allProducts.filter(
          (product) =>
            product.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  const filteredBySearchTerm = filteredProducts.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2 className="Category_title">PRODUCT OVERVIEW</h2>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="Category_Container">
        <CategoryButton
          category="All Products"
          onClick={() => setSelectedCategory("all")}
        />
        <CategoryButton
          category="Men"
          onClick={() => setSelectedCategory("men's clothing")}
        />
        <CategoryButton
          category="Women"
          onClick={() => setSelectedCategory("women's clothing")}
        />
        <CategoryButton
          category="Electronics"
          onClick={() => setSelectedCategory("electronics")}
        />
        <CategoryButton
          category="Jewelry"
          onClick={() => setSelectedCategory("jewelery")}
        />
      </div>

      <div className="Container">
        <div className="Row">{mapProducts(filteredBySearchTerm)}</div>
      </div>
    </div>
  );
};

export default CategoryComponent;
