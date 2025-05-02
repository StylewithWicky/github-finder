import './App.css';
import { useState } from 'react';
import Searchbar from './Components/Searchbar';

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
      <h1>GitHub User Finder</h1>
      <Searchbar search={search} setSearch={setSearch} onSearch={onSearch} />

      {userData && (
        <div className="user-info">
          <h2>{userData.name}</h2>
          <img src={userData.avatar_url} alt={`${userData.name}'s avatar`} width="100" />
          <p><strong>Username:</strong> {userData.login}</p>
          <p><strong>Bio:</strong> {userData.bio || "No bio available"}</p>
          <p><strong>Followers:</strong> {userData.followers}</p>
          <p><strong>Following:</strong> {userData.following}</p>
          <p><strong>Public Repos:</strong> {userData.public_repos}</p>
          <p><strong>Location:</strong> {userData.location || "Unknown"}</p>
        </div>
      )}
    </div>
  );
}

export default App;

