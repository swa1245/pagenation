import { useEffect, useState } from "react";

export default function Gallery() {
  const [posts, setPosts] = useState([]);
  const [indx, setIndx] = useState(1);

  useEffect(() => {
    const getData = async function () {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=6&_page=${indx}`
      );
      const data = await res.json();
      setPosts(data);
    };
    getData();
  }, [indx]);

  let printdata = posts.map((e) => {
    return <h1>{e.title}</h1>;
  });
  return (
    <div>
      {printdata}
      <h2
        onClick={() => {
          if (indx > 1) {
            setIndx(indx - 1);
          }
        }}
      >
        prev
      </h2>
      <h1
        style={{
          color: indx == 20 ? "red" : "black",
        }}
      >
        {indx}
      </h1>
      <h2
        onClick={() => {
          if (indx < 20) {
            setIndx(indx + 1);
          }
        }}
      >
        forward
      </h2>
    </div>
  );
}
