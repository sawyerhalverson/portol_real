import React from 'react';

function HomePage() {
  const linkToHomePage = 'http://127.0.0.1:5500/index.html';

  return (
    <div>
      <h1>Home Page</h1>
      <p>This is the home page content.</p>
      <a href={linkToHomePage} target="_blank" rel="noopener noreferrer">
        Go to Home Page
      </a>
    </div>
  );
}

export default HomePage;
