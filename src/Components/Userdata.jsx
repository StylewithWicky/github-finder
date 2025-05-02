import React from 'react'

function Userdata({userData}) {
    if(!userData){
        return <p className='no-user'>Can't find user</p>
    }
  return (
    <div className="user-info">
      
        
          <h2>{userData.name}</h2>
        <div className='Section1'>
          <div className='image'>
          <img src={userData.avatar_url} alt={`${userData.name}'s avatar`} width="100" />
          </div>
          
          <div className='bio'>
          <p><strong>Bio:</strong> {userData.bio || "No bio available"}</p>
          </div>
          </div>
          <div className='Section2'>
          <div className='login'>
          <p><strong>Username:</strong> {userData.login}</p>
          </div>
          <div className='followers'>
          <p><strong>Followers:</strong> {userData.followers}</p>
          </div>
          <div className='following'>
          <p><strong>Following:</strong> {userData.following}</p>
          </div>
          </div>
          <div className='Section3'>
            <div className='repos'>
          <p><strong>Public Repos:</strong> {userData.public_repos}</p>
          </div>
          <div className='Location'>
          <p><strong>Location:</strong> {userData.location || "Unknown"}</p>
          </div>
          </div>
        </div>
  )
}

export default Userdata