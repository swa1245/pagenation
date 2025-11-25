import { useState } from "react";

export default function SeacrhSuggestion() {
  let arr = [
    {
      name: "Petals of roses",
      image:
        "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=3786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Animals of town",
      image:
        "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "the crowd of city",
      image:
        "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "fruits of planet",
      image:
        "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=3764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "orange peeled",
      image:
        "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=3337&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "web design",
      image:
        "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "apple juice",
      image:
        "https://images.unsplash.com/photo-1576673442511-7e39b6545c87?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const [showdiv, setshowdiv] = useState(false);
  const [focus, setFocus] = useState(false);
  const [inputval, setInputval] = useState("");
  const [filterdata, setFilterdata] = useState(arr);

  const onchangevalue = (e) => {
    setInputval(e.target.value);
    console.log(e.target.value);
    const filtered = arr.filter((item) =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilterdata(filtered);
  };

  return (
    <div>
      <div className=" flex mt-4 justify-center ">
        <input
          onFocus={() => {
            setshowdiv(true), setFocus(true);
          }}
          onBlur={() => {
            setshowdiv(false), setFocus(false);
          }}
          value={inputval}
          onChange={onchangevalue}
          type="text"
          placeholder="enter your search here"
          className=" items-center z-10  decoration-0  rounded-xl bg-amber-200 text-center border-1 border-black"
        />
      </div>
      <div
        className={`h-40 w-40 z-10 bg-amber-200 absolute top-[5%] left-1/2 transform -translate-x-1/2 overflow-y-auto p-2 rounded shadow ${
          showdiv && inputval ? "block" : "hidden"
        }`}
      >
        {filterdata.length > 0 ? (
          filterdata.map((item) => (
            <h1
              key={item.name}
              className="text-black text-sm p-1 hover:bg-gray-300 cursor-pointer rounded"
            >
              {item.name}
            </h1>
          ))
        ) : (
          <h1 className="text-black text-sm p-1">No results found</h1>
        )}
      </div>
      <div className="flex mt-20 items-center  pl-20 gap-48 flex-wrap">
        {filterdata.map((item) => {
          return (
            <div className="">
              {focus && (
                <div className="absolute inset-0 bg-black opacity-10 rounded"></div>
              )}
              <img
                className="h-40 w-50 rounded-md"
                src={item.image}
                alt=""
                srcset=""
              />
              <h1 className="text-center text-lg font-bold">{item.name}</h1>
            </div>
          );
        })}
      </div>
      ;
    </div>
  );
}
