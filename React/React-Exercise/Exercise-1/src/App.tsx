
// function getTitle(){
//   return "React"
// }

// function App(){
//   return (
//     <p>
//       Hello
//     </p>
//   )
// }
// function App() {
//   /*  Do somthing more */
//   const title = 'React';

//   //object
//   const welcome = {
//     greeting: 'Hey',
//     title: 'React'
//   }

//   return (
//     <>
// {/* <h1>Hello {title}</h1>
//     <h1>{welcome.greeting} {welcome.title}</h1>
//     <h1>This is my own UI</h1> */}
//     <h1>{getTitle()}</h1>
//     <label>Search :</label>
//     <input type="text" />

//     </>
//   )
// }

// export default App

// =============================

//list[0].title
// const list = [
//   {
//     title:'React',
//     url:"https://react.dev",
//     author:'Jordon Walke',
//     num_comments: 3,
//     points: 4,
//     objectID: 0
//   },
//   // list[1].title
//   {title:'Redux',
//     url:"https://redux.js.org",
//     author:'Den Abramov, Andrew Clarke',
//     num_comments: 2,
//     points: 5,
//     objectID: 1}
// ]

// function App() {

//   return (
//     <>

//     <ul>
//       <strong>{list[0].title}</strong>
//       <strong>{list[1].title}</strong>
//     </ul>

//     </>
//   )
// }

// export default App

// ========================================================================================


// import { useState } from "react";

// function App() {

//   const stories = [
//     {
//       title: 'React',
//       url: 'https://react.dev',
//       author: 'Jordan Walke',
//       num_comments: 3,
//       points: 4,
//       objectID: 0,
//     },
//     {
//       title: 'Redux',
//       url: 'https://redux.js.org',
//       author: 'Dan Abramov, Andrew Clark',
//       num_comments: 2,
//       points: 5,
//       objectID: 1,
//     },
//   ];

//   return (
//     <div>
//       <h1>My Coder Stories</h1>

//       <Search />

//       <hr />

//       {/* Passed list prop to List Component */}
//       <List list={stories} />
//     </div>
//   );
// }

// function List(props) {
//   return (
//     <ul>
//       {props.list.map(function (item) {
//         return (
//           <Item item={item} />
//         );
//       })}
//     </ul>
//   );
// }

// function Item(props) {
//   return (
//     <strong key={props.item.objectID}>
//       <span>
//         <a href={props.item.url}>{props.item.title}</a>
//       </span>
//       <span>{props.item.author}</span>
//       <span>{props.item.num_comments}</span>
//       <span>{props.item.points}</span>
//     </strong>
//   );
// }

// // Search Component
// function Search() {
//   // let searchTerm = '';

//   // const handleChange = (event) => {
//   //   searchTerm = event.target.value;
//   //   console.log(searchTerm);
//   // };

//   // return (
//   //   <div>
//   //     <label>Search : </label>
//   //     <input type="text" onChange={handleChange} />

//   //     <p>
//   //       Searching for <strong>{searchTerm}</strong>
//   //     </p>
//   //   </div>
//   // );


//   const [searchTerm, setSearchTerm] = useState('');

//   const handleChange = (event) => {
//     // searchTerm = event.target.value;

//     setSearchTerm(event.target.value);
//     console.log(searchTerm);
//   }

//   return (
//     <div>
//       <label>Search : </label>
//       <input type="text" onChange={handleChange} />

//       <p>
//         Searching for <strong>{searchTerm}</strong>
//       </p>
//     </div>
//   );
// }

// export default App;


// =========================================================




// import { useState } from "react";

// function App() {

//   const stories = [
//     {
//       title: 'React',
//       url: 'https://react.dev',
//       author: 'Jordan Walke',
//       num_comments: 3,
//       points: 4,
//       objectID: 0,
//     },
//     {
//       title: 'Redux',
//       url: 'https://redux.js.org',
//       author: 'Dan Abramov, Andrew Clark',
//       num_comments: 2,
//       points: 5,
//       objectID: 1,
//     },
//     {
//       title: 'Node',
//       url: 'https://Nodejs.org',
//       author: 'Reyan Dahl',
//       num_comments: 2,
//       points: 5,
//       objectID: 2,
//     },
//     {
//       title: 'Oracle',
//       url: 'https://Oracle.com',
//       author: 'Larry Elison',
//       num_comments: 2,
//       points: 6,
//       objectID: 3,
//     },
//     {
//       title: 'java',
//       url: 'https://Oracle.com',
//       author: 'James Gosling',
//       num_comments: 2,
//       points: 7,
//       objectID: 4,
//     },
//     {
//       title: 'C',
//       url: 'https://clanguage.org',
//       author: 'Dennis Retchie',
//       num_comments: 2,
//       points: 8,
//       objectID: 5,
//     },
//   ];

//   const [searchTerm, setSearchTerm] = useState('');

//   const handleChange = (event) => {
//     setSearchTerm(event.target.value);
//     console.log(searchTerm);
//   }

//   const searchedStories = stories.filter(function(story){
//     return story.title.includes(searchTerm);
//   })

//   return (
//     <div>
//       <h1>My Coder Stories</h1>

//       <Search onSearch = {handleChange}/>

//       <hr />

//       {/* Passed list prop to List Component */}
//       <List list={searchedStories} />
//     </div>
//   );
// }

// function List(props) {
//   return (
//     <ul>
//       {props.list.map(function (item) {
//         return (
//           <Item item={item} />
//         );
//       })}
//     </ul>
//   );
// }

// function Item(props) {
//   return (
//     <strong key={props.item.objectID}>
//       <span>
//         <a href={props.item.url}>{props.item.title}</a>
//       </span>
//       <span>{props.item.author}</span>
//       <span>{props.item.num_comments}</span>
//       <span>{props.item.points}</span>
//     </strong>
//   );
// }

// // Search Component
// function Search(props) {


//   return (
//     <div>
//       <label>Search : </label>
//       <input type="text" onChange={props.onSearch} />
// {/* 
//       <p>
//         Searching for <strong>{searchTerm}</strong>
//       </p> */}
//     </div>
//   );
// }

// export default App;

// =============================================================================================





// import { useState } from "react";

// function App() {

//   const stories = [
//     {
//       title: 'React',
//       url: 'https://react.dev',
//       author: 'Jordan Walke',
//       num_comments: 3,
//       points: 4,
//       objectID: 0,
//     },
//     {
//       title: 'Redux',
//       url: 'https://redux.js.org',
//       author: 'Dan Abramov, Andrew Clark',
//       num_comments: 2,
//       points: 5,
//       objectID: 1,
//     },
//     {
//       title: 'Node',
//       url: 'https://Nodejs.org',
//       author: 'Reyan Dahl',
//       num_comments: 2,
//       points: 5,
//       objectID: 2,
//     },
//     {
//       title: 'Oracle',
//       url: 'https://Oracle.com',
//       author: 'Larry Elison',
//       num_comments: 2,
//       points: 6,
//       objectID: 3,
//     },
//     {
//       title: 'java',
//       url: 'https://Oracle.com',
//       author: 'James Gosling',
//       num_comments: 2,
//       points: 7,
//       objectID: 4,
//     },
//     {
//       title: 'C',
//       url: 'https://clanguage.org',
//       author: 'Dennis Retchie',
//       num_comments: 2,
//       points: 8,
//       objectID: 5,
//     },
//   ];

//   const [searchTerm, setSearchTerm] = useState('');

//   const handleChange = (event) => {
//     setSearchTerm(event.target.value);
//     console.log(searchTerm);
//   }

//   const searchedStories = stories.filter(function (story) {
//     return story.title.includes(searchTerm);
//   })

//   return (
//     <div>
//       <h1>My Coder Stories</h1>

//       <Search onSearch={handleChange} />

//       <hr />

//       {/* Passed list prop to List Component */}
//       <List list={searchedStories} />
//     </div>
//   );
// }

// const List = (props) => {
//   return (
//     <ul>
//       {props.list.map((item) => {
//         return (
//           <Item key={item.objectID} {...item} />
//         );
//       })}
//     </ul>
//   );
// }

// function Item({ title, objectID, url, num_comments, points,author }) {
//   return (
//     <strong>
//       <span >Title : {title}</span>
//       <br />
//       <span>Url : 
//         <a href={url} >{url}</a>
//       </span>
//       <br />
//       <span>Author Name : {author}</span>
//       <br />
//       <span>No. Of Comments : {num_comments}</span>
//       <br />
//       <span>Points : {points}</span>
//       <br />
//       <hr />
//     </strong>
//   );
// }

// // Search Component
// function Search(props) {


//   return (
//     <div>
//       <label>Search : </label>
//       <input type="text" onChange={props.onSearch} />
//       {/* 
//       <p>
//         Searching for <strong>{searchTerm}</strong>
//       </p> */}
//     </div>
//   );
// }

// export default App;

// =============================================================




// import { useEffect, useState } from "react";

// function App() {

//   const [searchTerm, setSearchTerm] = useState(
//     localStorage.getItem('search') || 'React'
//   );

//   const stories = [
//     {
//       title: 'React',
//       url: 'https://react.dev',
//       author: 'Jordan Walke',
//       num_comments: 3,
//       points: 4,
//       objectID: 0,
//     },
//     {
//       title: 'Redux',
//       url: 'https://redux.js.org',
//       author: 'Dan Abramov, Andrew Clark',
//       num_comments: 2,
//       points: 5,
//       objectID: 1,
//     },
//     {
//       title: 'Node',
//       url: 'https://Nodejs.org',
//       author: 'Reyan Dahl',
//       num_comments: 2,
//       points: 5,
//       objectID: 2,
//     },
//     {
//       title: 'Oracle',
//       url: 'https://Oracle.com',
//       author: 'Larry Elison',
//       num_comments: 2,
//       points: 6,
//       objectID: 3,
//     },
//     {
//       title: 'java',
//       url: 'https://Oracle.com',
//       author: 'James Gosling',
//       num_comments: 2,
//       points: 7,
//       objectID: 4,
//     },
//     {
//       title: 'C',
//       url: 'https://clanguage.org',
//       author: 'Dennis Retchie',
//       num_comments: 2,
//       points: 8,
//       objectID: 5,
//     },
//   ];

//   useEffect(()=>{
//     localStorage.setItem('search',searchTerm);
//   }, [searchTerm])

//   const handleChange = (event) => {
//     setSearchTerm(event.target.value);
//     // console.log(searchTerm);
//   }

//   const searchedStories = stories.filter(function (story) {
//     return story.title.includes(searchTerm);
//   })

//   return (
//     <div>
//       <h1>My Coder Stories</h1>

//       <Search onSearch={handleChange} />

//       <hr />

//       {/* Passed list prop to List Component */}
//       <List list={searchedStories} />
//     </div>
//   );
// }

// const List = (props) => {
//   return (
//     <ul>
//       {props.list.map((item) => {
//         return (
//           <Item key={item.objectID} {...item} />
//         );
//       })}
//     </ul>
//   );
// }

// function Item({ title, objectID, url, num_comments, points,author }) {
//   return (
//     <div className="card-container">
//     <div className="card p-2 m-3 border-dark border-1">
//       <strong>
//      <span >Title : {title}</span>
//      <br />
//      <span>Url : 
//        <a href={url} >{url}</a>
//      </span>
//      <br />
//      <span>Author Name : {author}</span>
//      <br />
//      <span>No. Of Comments : {num_comments}</span>
//      <br />
//      <span>Points : {points}</span>
//      <br />
//      {/* <hr /> */}
//    </strong>
//     </div>
//    </div>

    
    
//   );
// }

// // Search Component
// function Search(props) {


//   return (
//     <div>
//       <label>Search : </label>
//       <input type="text" onChange={props.onSearch} />
//       {/* 
//       <p>
//         Searching for <strong>{searchTerm}</strong>
//       </p> */}
//     </div>
//   );
// }

// export default App;



import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem('search') || 'react'
  );

  const stories = [
    {
      title: 'react',
      url: 'WWW.react.dev',
      author: 'jordon walke',   //Jordon Walke
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org',
      author: null,     // Dan Abramov, Andrew Clark
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
    {
      title: 'Python',
      url: 'https://python.org',
      author: 'Guido van Rossum',
      num_comments: 15,
      points: 95,
      objectID: 5,
    },
    {
      title: 'JavaScript',
      url: 'https://ecma-international.org',
      author: 'Brendan Eich',
      num_comments: 20,
      points: 88,
      objectID: 6,
    },
    {
      title: 'C++',
      url: 'https://isocpp.org',
      author: 'Bjarne Stroustrup',
      num_comments: 10,
      points: 82,
      objectID: 7,
    },
    {
      title: 'TypeScript',
      url: 'https://typescriptlang.org',
      author: 'Anders Hejlsberg',
      num_comments: 12,
      points: 90,
      objectID: 8,
    },
    {
      title: 'Rust',
      url: 'https://rust-lang.org',
      author: 'Graydon Hoare',
      num_comments: 8,
      points: 94,
      objectID: 9,
    }
  ];

  useEffect(() => {
    localStorage.setItem('search', searchTerm);
  }, [searchTerm]);


  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter(function (story) {
    return story.title.startsWith(searchTerm);
  });


  return (
    <div className="m-2">
      <h1>My Coder Stories</h1>

      <Search onSearch={handleChange} />

      <hr />

      {/* Passed list prop to List Component */}
      <List list={searchedStories} />
    </div>
  );
}

const List = (props) => {
  if (props.list.length !== 0) {
    return (
      <div className="row g-4">
        {props.list.map((item) => {
          return (<Item key={item.objectID} {...item} />);
        })}
      </div>
    );
  } else {
    return (<div className="alert alert-danger">Data Not found ...</div>);
  }
};

function Item({ title, objectID, url, num_comments, points, author }) {

  const capitalize = (str) => (str.charAt(0).toUpperCase() + str.slice(1));
  const Replace = (url) => (url.replace("WWW","https://"));

  return (

    <div className="col-lg-3 col-md-4 col-sm-12">
      <div className="card h-100 border-dark shadow-sm">
      <div className="card-header bg-info text-dark">
          <h5 className="p-2 text-center font-bold text-truncate"><strong>{capitalize(title) ?? 'Unknown' }</strong></h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><strong>Url:</strong> <a href={url} className="text-truncate " >{Replace(url) ?? 'Unknown'} </a></li>
          <li className="list-group-item" style={{ textTransform: 'capitalize' }}><strong>Author:</strong> {author ?? 'Unknown'}</li>
          <li className="list-group-item"><strong>Comments:</strong> {num_comments ?? 'Unknown'}</li>
          <li className="list-group-item"><strong>Points:</strong> {points ?? 'Unknown'}</li>
        </ul>
      </div>
    </div>
  );
}


// Search Component
function Search(props) {


  return (
    <div className="input-group w-100 ">
      <label className="d-flex align-items-center m-2 ">Search : </label>
      
      <input 
          className="form-control border-dark border-1 rounded-pill " 
          style={{ paddingLeft: '40px' }} 
          type="text" 
          placeholder="Search stories..."
          onChange={props.onSearch} 
        />
      </div>
  );
}

export default App;



