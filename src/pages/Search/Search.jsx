import React,{ useEffect, useState }  from "react";
import axios from "axios";
import "./Search.css";

const Search = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [sortCriteria, setSortCriteria] = useState("");

  useEffect(() => {
    axios
      .get("https://655f2b37879575426b44b8f7.mockapi.io/productss")
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const sortProducts = (criteria) => {
    let sortedProducts;
    if (criteria === "az-za") {
      sortedProducts = [...filteredProducts].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    } else if (criteria === "za-az") {
      sortedProducts = [...filteredProducts].sort((a, b) =>
        b.title.localeCompare(a.title)
      );
    } else if (criteria === "price-asc") {
      sortedProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
    } else if (criteria === "price-desc") {
      sortedProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
    }
    setSortCriteria(criteria);
    setFilteredProducts(sortedProducts);
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    if (e.target.value === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div>
      <div className="sorting-options">
        <button onClick={() => sortProducts("az-za")}>A-dan Z-ə</button>
        <button onClick={() => sortProducts("za-az")}>Z-dən A-ya</button>
        <button onClick={() => sortProducts("price-asc")}>
          Qiymət (Ucuzdan Bahaya)
        </button>
        <button onClick={() => sortProducts("price-desc")}>
          Qiymət (Bahadan Ucuzaya)
        </button>
      </div>
      <div className="axtarish">
        <div className="searchDiv">
          <input
            className="inp"
            type="text"
            placeholder="Axtarış"
            value={searchText}
            onChange={handleSearch}
          />
        </div>
      </div>

      <div id="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="Wishlist">
            <div className="containerWish">
              <div className="boxes">
                <div className="image">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="spanlar">
                  <span className="yenilik">YENILIK</span>
                  <span className="movcudluq">MOVCUDLUGU DEQIQLESDIRIN</span>
                </div>
                <h4>{product.title}</h4>
                <h2>{product.price} AZN</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
