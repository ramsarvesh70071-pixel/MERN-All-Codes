
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
//       <li>{list[0].title}</li>
//       <li>{list[1].title}</li>
//     </ul>

//     </>
//   )
// }

// export default App

// ========================================================================================


import React from 'react';

function App() {
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
  ];

  return (
    <div>
      <h1>My Coder Stories</h1>

      <Search />

      <hr />

      {/* Passed list prop to List Component */}
      <List list={stories} />
    </div>
  );
}

function List(props) {
  return (
    <ul>
      {props.list.map(function (item) {
        return (
          <Item item={item} />
        );
      })}
    </ul>
  );
}

function Item(props) {
  return (
    <li key={props.item.objectID}>
      <span>
        <a href={props.item.url}>{props.item.title}</a>
      </span>
      <span>{props.item.author}</span>
      <span>{props.item.num_comments}</span>
      <span>{props.item.points}</span>
    </li>
  );
}

// Search Component
function Search() {
  let searchTerm = '';

  const handleChange = (event) => {
    searchTerm = event.target.value;
    console.log(searchTerm);
  };

  return (
    <div>
      <label>Search : </label>
      <input type="text" onChange={handleChange} />

      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
    </div>
  );
}

export default App;
