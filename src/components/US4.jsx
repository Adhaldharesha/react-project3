import { useState } from "react";

function List() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const addItem = () => {
    if (item.trim() !== "") {
      setList([...list, item]);
      setItem("");
    }

    }

    
    const handleDelete= (index)=>{
        const update =list.filter((_,i)=>i !==index)
        setList(update)
  };

  return (
    <div>
      <h2>My List</h2>

      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Enter item"
      />

      <button onClick={addItem}>Add</button>
     
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}
          <button onClick={()=>handleDelete(index)}>delect</button>
          </li>
          
        ))}
      </ul>
    </div>
  );
}

export default List;