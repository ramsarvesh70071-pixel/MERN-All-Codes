
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem('search') || 'React'
  );

  const stories = [
    {
      title: 'React',
      url: 'https://react.dev',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
    {
      title: 'Node',
      url: 'https://Nodejs.org',
      author: 'Reyan Dahl',
      num_comments: 2,
      points: 5,
      objectID: 2,
    },
    {
      title: 'Oracle',
      url: 'https://Oracle.com',
      author: 'Larry Elison',
      num_comments: 2,
      points: 6,
      objectID: 3,
    },
    {
      title: 'java',
      url: 'https://Oracle.com',
      author: 'James Gosling',
      num_comments: 2,
      points: 7,
      objectID: 4,
    },
    {
      title: 'C',
      url: 'https://clanguage.org',
      author: 'Dennis Retchie',
      num_comments: 2,
      points: 8,
      objectID: 5,
    },
  ];

  useEffect(() => {
    localStorage.setItem('search', searchTerm);
  }, [searchTerm]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter(function (story) {
    return story.title.includes(searchTerm);
  });

  return (
    <div className="p-2">
      <h1 style={{ color: "black" }}>My Coder Stories</h1>

      <Search onSearch={handleChange} />

      <hr />

      <List list={searchedStories ? searchedStories : null} />
    </div>
  );
}

const List = (props) => {
  if (props.list.length !== 0) {
    return (
      <div className="row">
        {console.log(props)}
        {props.list.map((item) => {
          return (
            <Item key={item.objectID} {...item} />
          );
        })}
      </div>
    );
  } else {
    return (
      <>
        <div>Data Not found ...</div>
      </>
    );
  }
};

function Item({ title, objectID, url, num_comments, points, author }) {
  return (
    <div className="col-12 col-sm-4 mt-3">
      <div
        className="card text-white h-100 mb-3 bg-white mx-3"
        style={{ maxWidth: "18rem" }}
      >
        <li
          className="d-flex flex-column justify-content-center justify-content-md-start"
          key={objectID}
        >
          <span card-title className="font-bold bg-primary">
            Title : {title}
          </span>

          <span className="text-left px-sm-2 px-md-4 bg-white text-dark">
            Url :
            <a href={url}>{url}</a>
          </span>

          <span className="text-left px-sm-2 px-md-4 bg-white text-dark">
            Author Name : {author}
          </span>

          <span className="text-left px-sm-2 px-md-4 bg-white text-dark">
            No. Of Comments : {num_comments}
          </span>

          <span className="text-left px-sm-2 px-md-4 bg-white text-dark">
            Points : {points}
          </span>
        </li>
      </div>
    </div>
  );
}

// Search Component
function Search(props) {
  return (
    <div className="input-group w-100">
      <label>Search : </label>
      <input
        className="form-control flex-grow-1 border-dark border-3 ml-2"
        type="text"
        onChange={props.onSearch}
      />
    </div>
  );
}

export default App;