import { useState, useEffect } from "react";

import CardList from "./components/card-list/card-list.component";

import { getData } from "./utils/data.utils";

export type Monster = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [monsters, setMonsters] = useState<Monster[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonsters(users);
    };

    fetchUsers();
  }, []);

 
  return (
    <div style={{textAlign:"center"}}>
      <h1>Hello</h1>
      <CardList monsters={monsters} />
    
    </div>
  );
};

export default App;
