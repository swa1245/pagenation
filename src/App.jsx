// import React, { useEffect, useState } from "react";

import { createContext, useState } from "react";
import Filter from "./components/Filter";
import FilterButton from "./components/FilterButton";
import Gallery from "./components/Gallery";
import SeacrhSuggestion from "./components/SearchSuggestion";
import ChildA from "./components/ChildA";
import MultiStepForm from "./components/MultiStepForm";
import MultiStep from "./components/MultiStep";

// import {useState } from "react"

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

// import React, { useEffect, useState } from "react";

// const App = () => {
//   const [users, setUsers] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const fetchUsers = async () => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await res.json();
//     console.log(data);

//     setUsers(data);
//   };
//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   function serach(e){
//     setSearchTerm(e.target.value)
//   }
//    const filteredUsers = users.filter((user) =>
//   searchTerm ? user.name.toLowerCase().includes(searchTerm.toLowerCase()) : false
// );

//   return (
//     <div className="bg-black h-screen w-full ">
//       <h2>🔍 Search Filter Example</h2>
//       <input
//         type="text"
//         value={searchTerm}
//         onChange={serach}
//         placeholder="enter your search  "
//         className="ml-4 border-2 text-white border-indigo-50"
//       />
//       <div>
//       {filteredUsers.length>0?(
//         filteredUsers.map((user) => (
//             <div
//               key={user.id}
//               className="text-white"
//             >
//               <h3>{user.name}</h3>
//               <p>{user.email}</p>
//             </div>
//           ))
//       ):(
//           <p>No matching users found 😞</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;

// const App = () => {
//   const [count,setCount] = useState(0)
//   useEffect(()=>{
//     setInterval(() => {
//       setCount(prev=>prev+1)
//     }, 1000);
//   },[])

//   useEffect(()=>{
//       let name = `this is {count}`
//     console.log(name);
//   },[count])

//   return (
//     <div>
//       <div>{count}</div>
//     </div>
//   )
// }

// export default App

// import React from 'react'

// const App = () => {
//   const [visible ,setvisble] = useState("")

//   return (
//     <div>
//       <button onClick={()=>{
//         setvisble(!visible)
//       }}>see para</button>
//       {visible && <p>this ismy para</p>}
//     </div>
//   )
// }

// export default App
const ThemeContext = createContext();
export default function App() {
  
  // step1 create context
  // step2 wap all the child inside a provider
  // step3 pass a value
  // step 4 export the context consume all value in consumer 
  const [theme,setTheme] =  useState('light')
  return (
    <div>
      {/* <Gallery/> */}
      {/* <Filter/> */}
      {/* <FilterButton/> */}
      {/* <SeacrhSuggestion/> */}
      {/* <ThemeContext.Provider value={{theme,setTheme}}>
        <div style={{
          height:"400px",
          width:"400px",
          border:"1px solid black",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          backgroundColor: theme === 'light' ? 'beige' : '#333',
        }}>
          <ChildA/>
        </div>
        
      </ThemeContext.Provider> */}
      {/* <MultiStepForm/> */}
      <MultiStep/>
    </div>
  );
}

export { ThemeContext };