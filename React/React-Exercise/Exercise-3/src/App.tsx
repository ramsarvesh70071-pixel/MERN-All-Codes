import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';


function App() {

  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem('search') || ''
  );

  const [stories, setStories] = useState([]);


  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setStories(json))
  }, []);


  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter(function (story) {
    return story.title?.includes(searchTerm);
  });

  return (

    
    <div className="text-center container-fluid" >

      <div className="d-flex justify-content-start p-3">
        <button
          className="btn btn-outline-light border-0 pt-0 pb-0 " type="button" data-bs-toggle="offcanvas" data-bs-target="#Sidebar" style={{ fontSize: '24px' }} >
         <i className="bi bi-list " style={{ fontSize: '30px' }}></i>
        </button>
      </div>
      <div className="offcanvas offcanvas-start bg-light text-dark" style={{ transition: 'transform 0.4s ease-in-out' }} id="Sidebar">
        <div className="offcanvas-header border-bottom border-dark">
          <h5 className="offcanvas-title text-success"> Menu</h5>
          <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas"></button>
        </div>
        <div className="offcanvas-body text-start">
          <ul className="list-unstyled fs-5">
            <li className="mb-3">Recent Activity</li>
            <li className="mb-3">Cart</li>
            <li className="mb-3">Settings</li>
          </ul>
        </div>
      </div>
      <label className="d-flex "><label className=" container mt-3"><h1 className="magnetic fw-bold text-center display-4" style={{ color: "rgb(95, 226, 43)" }}>My FakeStore Stories</h1></label>
      </label>
      
      <Search onSearch={handleChange} />

      {/* Passed list prop to List Component */}
      <List list={searchedStories} />
    </div>

   
  );
}


// Search Component

function Search(props) {
  return (

    <div className="container mt-3 mb-2">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">

          <div className="input-group mb-3 shadow-sm" style={{ borderRadius: '25px', overflow: 'hidden', border: '1px solid #dfe1e5' }}>
            <span className="input-group-text bg-white border-0 ps-3">
              <i className="bi bi-search text-muted"></i>
            </span>

            <input
              type="text"
              className="form-control border-0 shadow-none ps-2"
              placeholder="Search Stories..."
              onChange={props.onSearch}
              style={{ height: '45px', fontSize: '16px' }}
            />
            <span className="input-group-text bg-white border-0 pe-3">
              <i className="bi bi-mic text-primary me-3"></i>
              <i className="bi bi-camera text-primary"></i>
            </span>

          </div>

        </div>
      </div>
    </div>


  );
}


const List = (props) => {
  if (props.list.length !== 0) {
    return (

      <div className="container-fluid"> 
        <div className="row justify-content-center g-4">
          {props.list.map((item) => (
            <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
              <Item key={item.id} {...item} />
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (<div className="alert alert-info text-center">Data Not found ...</div>);
  }
};


//Item Copmponent

function Item({ title, image, price, category, description, rating }) {

  return (

    <div className="card professional-card  d-flex flex-column main-card align-items-center  ">
      <div className="row g-0 flex-grow-1">
        <div className="col-md-4 d-flex align-items-start justify-content-center p-1 professional-card">
          <img src={image} className="img-fluid rounded" alt={title} />
        </div>
        <div className="col-md-8 d-flex flex-column flex-grow-1 professional-card ">
          <div className="card-body d-flex align-items-center">
            <h5 className="card-title text-capitalize fw-bold"><strong><span style={{ color: 'gold' }}>Title : </span><span>{title ?? "Unknown"}</span></strong></h5>
          </div>
        </div>
      </div>

        <div className=" d-flex  flex-grow-1 professional-card mt-0 p-0">
          <div className="card-body ">
          <p className="card-text mb-0"><strong style={{ color: 'gold', margin: '10px' }}>Price:</strong> <span className=" fw-bold" style={{ color: 'greenyellow', fontSize: '25px' }}>${price ?? "Unknown"}</span> <span className="text-white  m-1 fs-2"> , </span><span className="card-text mb-0" ><strong style={{ color: 'gold', margin: '10px' }}>Category:</strong> <span style={{ textTransform: "capitalize", color: 'black' }}> {category ?? "Unknown"}</span></span></p>
          <p className="card-text mb-1 fw-bold text-info"><small>⭐ {rating.rate} ({rating.count})</small> <span className="card-text"><strong style={{ color: 'gold', margin: '10px' }}><span></span> Pices Count:</strong> <span>{rating.count ?? "Unknown"}</span></span></p>
         
          <p className="card-text mb-0"><strong style={{ color: 'gold', margin: '10px' }}>Description:</strong> <small className="text-white fst-italic">{description ?? "Unknown"}</small></p>
            <button className="text-dark btn btn-primary fw-bold w-50 mt-2 professional-card " style={{ background: 'linear-gradient(135deg, #e0dc11 0%, #10e709 100%)' }}>Add To Cart</button>
          </div>
        </div>
    </div>
  );
}


export default App;

