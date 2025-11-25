import { useState } from "react";

export default function FilterButton(){
    const data = [
        {id:1,color:"red"},
        {id:2,color:"green"},
        {id:3,color:"red"},
        {id:4,color:"green"},
    ]
    const [filter,setfilter] = useState("all")

    const filterData  = data.filter((e)=>{
        if(filter==="all"){
            return true;
        }
        return e.color === filter;
    })
    return (
        <div style={{
            display: "flex",
            alignItems:"center",
            justifyContent:"center",
            gap:"20px",
            marginTop:"50px",
            border:"1px solid black",
        }}>
            <button onClick={() => setfilter("all")}>All</button>
            <button onClick={() => setfilter("red")}>Red</button>
            <button onClick={() => setfilter("green")}>Green</button>

            {
                filterData.map((e)=>(
                    <div key={e.id} style={{
                        width:"100px",
                        height:"100px",
                        backgroundColor:e.color
                    }}>{e.id}</div>
                ))
            }
        </div>
    )
}