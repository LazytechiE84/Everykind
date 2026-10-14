import { useState } from "react";
import { catalog } from "../data/catalog";
import ProductCard from "../components/productcard";

const categories = [
  "All",
  "Balloon Treats",
  "Boxed Presents",
  "Flower Bouquets",
  "Money Bouquets",
];

function Product() {
  const [selected, setSelected] = useState("All");

  const visibleItems =
    selected === "All"
      ? catalog
      : catalog.filter((item) => item.category === selected);

  return (
    <section className="shop">
      <div className="shop-inner">
        <h1 className="head">
          <span>Shop All Products</span>
        </h1>
        <p className="par">Discover our curated collection of thoughtful gifts</p>

        <div className="chips">
          {categories.map((category) => (
            <button
              key={category}
              className={category === selected ? "chip active" : "chip"}
              onClick={() => setSelected(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="shop-grid">
          {visibleItems.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Product;