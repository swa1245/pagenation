// import React, { useEffect, useState } from "react";

// const App = () => {
//   const [data, setData] = useState([]);
//   const [indx, setIndx] = useState(1);

//   const getData = async () => {
//     const res = await fetch(
//       `https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${indx}`
//     );
//     const data = await res.json();
//     setData(data);
//   };
//   useEffect(() => {
//     getData();
//   }, [indx]);
//   let printUserData = (
//     <h3 className="text-2xl text-gray-500 absolute top-1/2 left-0.5 -translate-x-0.5 -translate-y-0.5 ">
//       Loading...
//     </h3>
//   );
//   if (data.length > 0) {
//     printUserData = data.map((item, idx) => {
//       return (
//         <div key={idx} className="border border-white m-5 p-5 rounded-2xl">
//           <h1 className="text-xl font-bold">{item.title}</h1>
//           <p>{item.body}</p>
//         </div>
//       );
//     });
//   }

//   return (
//     <div className="bg-black h-screen  text-white">
//       {<div className="flex h-[70%] ">{printUserData}</div>}
//       <h1 className="text-center ">{indx}</h1>
//       <div className="flex justify-center items-center gap-6  mt-5">
//         <button
//         disabled={indx === 1}
//           onClick={() => {
//             if (indx > 1) setIndx(indx - 1);
//             printUserData = setData([]);
//           }}
//           className="bg-red-400 px-4 py-2 rounded-md "
//         >
//           prev
//         </button>
//         <button
//           disabled={indx === 20}

//           onClick={() => {
//             if (indx < 20) setIndx(indx + 1);
//           }}
//           className="bg-red-400 px-4 py-2 rounded-md "
//         >
//           next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default App;

// condiatonal redenring

// import React, { useState } from 'react'

// const App = () => {
//   const [para,setPara] = useState(false)
//   return (
//     <div>
//       <button onClick={()=>{
//         setPara(!para)
//       }}>get para</button>
//       {para && <p>this is my para</p>}
//     </div>
//   )
// }

// export default App

// serach filter

import React, { useEffect } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setUsers(data);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return <div>

  </div>;
};

export default App;
