import './App.css';
import { useState } from 'react';
import Searchbar from './Components/Searchbar';
import Userdata from './Components/Userdata';

function App() {
  const [search, setSearch] = useState('');
  const [userData, setUserData] = useState(null);

  const fetchData = (username) => {
    if (!username) return;

    fetch(`https://api.github.com/users/${username}`)
      .then(res => res.json())
      .then(user => {
        console.log(user); // Optional for debugging
        setUserData(user);
      })
      .catch(error => console.error("Error fetching GitHub user:", error));
  };

  const onSearch = () => {
    console.log("Button clicked!");
    fetchData(search);
  };

  return (
    <div className="App">
      
      <Searchbar search={search} setSearch={setSearch} onSearch={onSearch} />
      <Userdata userData={userData} setUserData={setUserData}/>
      
     
    </div>
  );
}

export default App;

