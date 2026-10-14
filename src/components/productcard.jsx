function ProductCard({ image, name, category, price }) {
  return (
    <div className="product-card">
      <div className="card-img">
        <img src={image} alt={name} />
        <div className="card-actions">
          <button aria-label="Add to wishlist">
            <i className="fa-regular fa-heart"></i>
          </button>
          <button aria-label="Add to cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
      <h3>{name}</h3>
      <p className="card-category">{category}</p>
      <p className="card-price">${price.toFixed(2)}</p>
    </div>
  );
}

export default ProductCard;