import React, { useState, useEffect } from 'react';
import '../styles/About.css';

const About = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div className="about-container">
      <h2 className='about-title'>About</h2>
      <p className='about-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod augue eget lacus dictum efficitur. Praesent euismod odio quis neque tincidunt tincidunt. Donec eget lacus risus. Fusce varius elit vel diam sollicitudin aliquet. Suspendisse potenti. Vivamus non fermentum risus, in convallis enim. Nulla facilisi. Nullam vel lectus ex. Vestibulum tempor turpis vel risus pretium, vel venenatis lectus malesuada. Donec interdum, nibh eu efficitur ultrices, ex nulla vehicula ex, quis lacinia metus massa eu orci.</p>
      <h3 className='user-title'>Users</h3>
      <ul className='about-ul'>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default About;
