import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    // Change 1: Do alag states
    const [searchTerm, setSearchTerm] = useState(
        localStorage.getItem('search') || ''
    );
    const [stories, setStories] = useState([]); // API data yahan aayega

    // Change 2: API se data fetch karna
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setStories(json))
            .catch(err => console.error("Data nahi mila:", err));
    }, []);

    useEffect(() => {
        localStorage.setItem('search', searchTerm);
    }, [searchTerm]);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Filter logic (Ab ye dynamic stories array par kaam karega)
    const searchedStories = stories.filter(function (story) {
        return story.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <div className="m-2">
            <h1 className="text-center">My FakeStore Stories</h1>
            <Search onSearch={handleChange} value={searchTerm} />
            <hr />
            <List list={searchedStories} />
        </div>
    );
}

const List = (props) => {
    if (props.list.length !== 0) {
        return (
            <div className="row g-4">
                {props.list.map((item) => {
                    // Change 3: objectID ki jagah id
                    return (<Item key={item.id} {...item} />);
                })}
            </div>
        );
    } else {
        return (<div className="alert alert-info">Data Not found ...</div>);
    }
};

// Change 4: Props ko API ke data (image, price, category) se match kiya
function Item({ title, image, price, category }) {
    const capitalize = (str) => (str ? str.charAt(0).toUpperCase() + str.slice(1) : '');

    return (
        <div className="col-lg-3 col-md-4 col-sm-12">
            <div className="card h-100 border-dark shadow-sm">
                {/* Image tag add kiya kyunki products ki photos hain */}
                <div className="p-2" style={{ height: '150px' }}>
                    <img src={image} className="card-img-top h-100 w-100" style={{ objectFit: 'contain' }} alt={title} />
                </div>
                <div className="card-header bg-info text-dark">
                    <h6 className="text-center text-truncate"><strong>{capitalize(title)}</strong></h6>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Price:</strong> ${price}</li>
                    <li className="list-group-item"><strong>Category:</strong> {capitalize(category)}</li>
                </ul>
            </div>
        </div>
    );
}

function Search(props) {
    return (
        <div className="input-group w-100">
            <label className="d-flex align-items-center m-2">Search : </label>
            <input
                className="form-control border-dark border-1 rounded-pill"
                style={{ paddingLeft: '20px' }}
                type="text"
                value={props.value}
                placeholder="Search products..."
                onChange={props.onSearch}
            />
        </div>
    );
}

export default App;













function Item({ title, image, price, category, description, rating }) {

    return (
  
      <div className="col-lg-12 col-md-4 col-sm-12 btn custom-card ">
        <div className="card h-100 border-dark shadow-sm d-lg-flex flex-lg-row overflow-hidden">
          <div className="p-2 bg-white d-flex align-items-center justify-content-center mt-5" style={{ minWidth :'30%',height: '250px' }}>
            <img src={image} className="card-img-top h-100 w-100 img-fluid " style={{ objectFit: 'contain' }} alt={title} />
          </div>
          <ul className="list-group list-group-flush w-100 border-start-lg border-dark border">
            <li className="list-group-item"><h5 className="card-title text-capitalize "><strong><span>Title : </span><span className="text-warning">{title ?? "Unknown"}</span></strong></h5></li>
            <li className="list-group-item"><strong >Price:</strong> <span className="text-success fw-bold">${price ?? "Unknown"} <button className=" text-dark btn btn-outline-primary " style={{marginLeft: '300px'}}>Buy Now</button> </span></li>
            <li className="list-group-item" style={{ textTransform: 'capitalize' }}><strong>Category:</strong> {category ?? "Unknown"}</li>
            <li className="list-group-item p-3"><strong>Rate:</strong> {rating.rate ?? "Unknown"}</li> {/*⭐*/}
            <li className="list-group-item p-3"><strong>Count:</strong> {rating.count ?? "Unknown"}</li>
            <li className="list-group-item p-3"><strong>Description:</strong> <span className="text-muted fst-italic">{description ?? "Unknown"}</span></li>
          </ul>
        </div>
      </div>
    );
  }