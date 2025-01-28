import React from 'react';
import Movies from './components/Movies';
import Songs from './components/Songs';
import Images from './components/Images';
import Users from './components/Users';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <Movies />
      <Songs />
      <Images />
      <Users />
    </div>
  );
}

export default App;
