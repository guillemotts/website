import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import '../App.css';
import NavBar from './NavBar'


function Layout() {
    const names = ["kyunghwan lim", "jeffrey lim", "kuberin lim", "jacob lim", "june lim"];
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleNameClick = () => {
      setCurrentIndex((currentIndex + 1) % names.length);
    };
  
    return (
      <div className="App">
        <NavBar />
        <div className="container">
          <header>
            <h1 id="name" onClick={handleNameClick}>{names[currentIndex]}</h1>
          </header>
          <section className="about">
            <p>hello! i'm a current sophomore studying computer science & neurobiology at penn.</p>
            <p>in my free time, i take long walks along the schuylkill, play monkeytype, and write about things i like.</p>
            <p>talk to me about the vienna secession, mahler, k-dramas, the celtics, startups...</p>
          </section>
          <footer>
            <a href="https://www.instagram.com/ky.yuuu/">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a href="https://www.linkedin.com/in/guillemots/">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <a href="https://github.com/ribaldheron">
              <ion-icon name="logo-github"></ion-icon>
            </a>
            <p>&copy; 2024 Kyunghwan Lim</p>
          </footer>
        </div>
        <div id="content">
          <Outlet />
        </div>
      </div>
    );
  }
  
  export default Layout;