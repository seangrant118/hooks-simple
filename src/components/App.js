import React, { useState } from "react";
import ResourceList from "./ResourceList";
import UserList from "./UserList";

const App = () => {
  const [resource, setResource] = useState("posts");
  return (
    <div>
      <div>
        <UserList />
        <button onClick={() => setResource("posts")}>Posts</button>
        <button onClick={() => setResource("todos")}>To Dos</button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
