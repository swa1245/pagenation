import { useEffect, useState } from "react";

export default function Filter() {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getData = async function () {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data);
    };
    getData();
  }, []);
  const filtered = posts.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div>
      <input type="text" value={query} onChange={(e)=>{
        setQuery(e.target.value)
      }}  placeholder="serach pots"/>

      {filtered.map((e) => (
        <h3 key={e.id}>{e.title}</h3>
      ))}
    </div>
  );
}
