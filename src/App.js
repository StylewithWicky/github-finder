import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Searchbar from './Components/Searchbar';

function App() {

  const [search, setSearch] = useState('');

const fetchData = (username) => {
  if (!username) return;

  fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(user => {
      console.log(user.name, user.bio, user.followers, user.public_repos);
    })
    .catch(error => console.error("Error fetching GitHub user:", error));
};
const onSearch = () => {
  console.log("Button clicked!"); // Just to test
  fetchData(search); // If you're using a fetchData function
};



  return (
    <div className="App">
      <Searchbar search={search} setSearch={setSearch} onSearch={onSearch}/>
    </div>
  );
}

export default App;
