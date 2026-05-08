// import { useEffect, useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';


// function App() {

//   const [searchTerm, setSearchTerm] = useState(
//     localStorage.getItem('search') || ''
//   );

//   const [stories, setStories] = useState([]); 


//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//       .then(res => res.json())
//       .then(json => setStories(json))
//   }, []);


//   const handleChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const searchedStories = stories.filter(function (story) {
//     return story.title?.includes(searchTerm);
//   });


//   return (
//     <div className="m-2 text-center">
//       <h1 className="magnetic fw-bold" style={{color: "rgb(226, 43, 195)", fontFamily:"cursive"}}>My FakeStore Stories</h1>

//       <Search onSearch={handleChange} />
//       <hr />

//       {/* Passed list prop to List Component */}
//       <List list={searchedStories} />
//     </div>
//   );
// }


// // Search Component
// function Search(props) {
//   return (
//     <div className="input-group w-100 ">
//       <label className="d-flex align-items-center m-2 ">Search : </label>
      
//       <input 
//           className="form-control border-dark border-1 rounded-pill " 
//           style={{ paddingLeft: '40px' }} 
//           type="text" 
//           placeholder="Search stories..."
//           onChange={props.onSearch} 
//         />
//       </div>
//   );
// }


// const List = (props) => {
//   if (props.list.length !== 0) {
//     return (
//       <div className="row g-3 ">
//         {props.list.map((item) => {
//           return (<Item key={item.id} {...item} />);
//         })}
//       </div>
//     );
//   } else {
//     return (<div className="alert alert-info text-center">Data Not found ...</div>);
//   }
// };


// function Item({ title, image, price, category, description, rating }) {

//   return (

//     <div className="col-lg-3 col-md-4 col-sm-12 btn border-2">
//       <div className="card h-100 border-dark shadow-sm custom-card">
//         <div className="p-2 card" style={{ height: '200px' }}>
//           <img src={image} className="card-img-top h-100 w-100" style={{ objectFit: 'contain' }} alt={title} />
//         </div>
//         <ul className="list-group card">
//           <li className="list-group-item"><h5 className="card-title text-capitalize "><strong><span>Title : </span><span className="text-warning">{title ?? "Unknown"}</span></strong></h5></li>
//           <li className="list-group-item"><strong >Price:</strong> <span className="text-success fw-bold">${price ?? "Unknown"} <button className="m-4  text-dark btn btn-outline-primary border-2">Buy Now</button> </span></li>
//           <li className="list-group-item" style={{ textTransform: 'capitalize' }}><strong>Category:</strong> {category ?? "Unknown"}</li>
//           <li className="list-group-item p-3"><strong>Rate:</strong> ⭐{rating.rate ?? "Unknown"}</li> {/*⭐*/}
//           <li className="list-group-item p-3"><strong>Count:</strong> {rating.count ?? "Unknown"}</li>
//           <li className="list-group-item p-3"><strong>Description:</strong> <span className="text-muted fst-italic">{description ?? "Unknown"}</span></li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default App;


























import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem('search') || ''
  );
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setStories(json);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        showToast('Error loading products!', 'error');
      });
  }, []);

  useEffect(() => {
    localStorage.setItem('search', searchTerm);
  }, [searchTerm]);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddToCart = (product) => {
    showToast(`✅ ${product.title.substring(0, 20)}... added to cart!`, 'success');
  };

  const handleBuyNow = (product) => {
    showToast(`🚀 Redirecting to checkout for ${product.title.substring(0, 15)}...`, 'success');
  };

  const handleWishlist = (productId) => {
    showToast('❤️ Added to wishlist!', 'success');
  };

  const searchedStories = stories.filter(story =>
    story.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    story.category?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-vh-100 py-4 px-3">
      {/* Header */}
      <header className="text-center mb-4">
        <h1 className="magnetic fw-bold">🛍️ My FakeStore</h1>
        <p className="text-white-50 mt-2">Premium Products • Best Prices • Fast Delivery</p>
      </header>

      {/* Search */}
      <div className="search-container">
        <div className="search-wrapper">
          <span className="search-icon">🔍</span>
          <input
            className="search-input"
            type="text"
            placeholder="Search products, categories..."
            value={searchTerm}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="products-grid">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="skeleton-card">
              <div className="skeleton-image"></div>
              <div className="skeleton-content">
                <div className="skeleton-line short"></div>
                <div className="skeleton-line medium"></div>
                <div className="skeleton-line"></div>
                <div className="skeleton-line short"></div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Products Grid */}
      {!loading && searchedStories.length > 0 && (
        <div className="products-grid">
          {searchedStories.map((item) => (
            <Item
              key={item.id}
              {...item}
              onAddToCart={handleAddToCart}
              onBuyNow={handleBuyNow}
              onWishlist={handleWishlist}
            />
          ))}
        </div>
      )}

      {/* No Results */}
      {!loading && searchedStories.length === 0 && (
        <div className="no-results">
          <div>🔍</div>
          <h4 className="mb-2">No products found</h4>
          <p className="text-muted">Try searching with different keywords</p>
        </div>
      )}

      {/* Toast Notification */}
      {toast && (
        <div className={`toast-notification ${toast.type}`}>
          <span className={`toast-icon toast-${toast.type}`}>
            {toast.type === 'success' ? '✓' : '✕'}
          </span>
          <span className="toast-message">{toast.message}</span>
        </div>
      )}
    </div>
  );
}

// Item Component - Professional Card Design
function Item({
  title,
  image,
  price,
  category,
  description,
  rating,
  onAddToCart,
  onBuyNow,
  onWishlist
}) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlistClick = (e) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
    onWishlist?.();
  };

  // Calculate discount (fake for demo)
  const originalPrice = price * 1.3;
  const discount = Math.round((1 - price / originalPrice) * 100);

  return (
    <div className="product-card">
      {/* Badges */}
      {discount > 15 && <span className="badge-sale">-{discount}% OFF</span>}
      {rating?.rate >= 4.5 && <span className="badge-new">⭐ Top Rated</span>}

      {/* Wishlist Button */}
      <button
        className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
        onClick={handleWishlistClick}
        title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
      >
        <i className={isWishlisted ? "fas fa-heart" : "far fa-heart"}></i>
      </button>

      {/* Image Section */}
      <div className="card-image-wrapper">
        <img src={image} alt={title} loading="lazy" />
        <div className="quick-view-overlay">
          <span>👁️ Quick View</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="card-body">
        {/* Category */}
        <span className="category-tag">{category}</span>

        {/* Title */}
        <h5 className="product-title">{title}</h5>

        {/* Rating */}
        <div className="rating-wrapper">
          <span className="stars">
            {'★'.repeat(Math.round(rating?.rate || 0))}
            {'☆'.repeat(5 - Math.round(rating?.rate || 0))}
          </span>
          <span className="rating-count">({rating?.count || 0} reviews)</span>
        </div>

        {/* Price */}
        <div className="price-section">
          <span className="current-price">${price?.toFixed(2)}</span>
          {discount > 15 && (
            <>
              <span className="original-price">${originalPrice?.toFixed(2)}</span>
              <span className="discount-badge">SAVE {discount}%</span>
            </>
          )}
        </div>

        {/* Description Preview */}
        <p className="description-preview">{description}</p>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button
            className="btn-add-cart"
            onClick={() => onAddToCart?.({ title, price })}
          >
            <i className="fas fa-cart-plus"></i> Add
          </button>
          <button
            className="btn-buy-now"
            onClick={() => onBuyNow?.({ title, price })}
          >
            <i className="fas fa-bolt"></i> Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;