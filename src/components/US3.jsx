
import { useState } from "react";

function Details() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Adhal",
      age: 22,
      place: "Kozhikode"
    },
    {
      id: 2,
      name: "Rahul",
      age: 23,
      place: "Kochi"
    },
    {
      id: 3,
      name: "Arun",
      age: 21,
      place: "Kannur"
    }
  ]);

  return (
    <div>
      <h2>User Details</h2>

      {users.map((user) => (
        <div key={user.id}>
          <h3>Name: {user.name}</h3>
          <p>Age: {user.age}</p>
          <p>Place: {user.place}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Details;

