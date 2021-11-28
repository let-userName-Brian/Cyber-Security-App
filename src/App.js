import './App.css';
import { hackerNewsFetch, remotiveFetch } from './Fetch';
import React, { useState, useEffect } from 'react';
import {Routes, Route } from "react-router-dom";
import SideMenu, { menuItems } from './SideMenu/SideMenu';
import NewsBody from './NewsBody/NewsBody';
import Dashboard from './Dashboard/Dashboard';
import Tips from './Tips/Tips';
import FavoritesNews from './Favorites/FavoritesNews';
import FavoritesTips from './Favorites/FavoritesTips';
import CyberRemoteJobs from './CyberJobs/CyberRemoteJobs';
import DevRemoteJobs from './CyberJobs/DevRemoteJobs';




function App() {
  const [news, setNews] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [inactive, setInactive] = useState(false);
  const [favTips, setFavTips] = useState([]);
  const [devJobs, setDevJobs] = useState([]);

  useEffect(() => {
    hackerNewsFetch()
      .then(data => {
        setNews(data);
      });
  }, []);


  // useEffect(() => {
  //   remotiveFetch()
  //     .then(results => {
  //       setDevJobs(results);
  //     });
  // }, []);
  

console.log("jobs", devJobs);


  return (
    <div className="App">
        <SideMenu
          onCollapse={(inactive) => {
            setInactive(inactive);
          }}
        />
        <div className={`container ${inactive ? "inactive" : ""}`}>
          {/* improvememt, not recorded in video, its just looping through menuItems
          instead of hard coding all the routes */}
          {menuItems.map((menu, index) => (
            <React.Fragment>
            <Routes key={index}>
              <Route key={menu.name} exact={menu.exact} path={menu.to}>
                <>{menu.name}</>
              </Route>
              {menu.subMenus && menu.subMenus.length > 0
                ? menu.subMenus.map((subMenu, i) => (
                  <Route key={subMenu.name} path={subMenu.to}>
                    <>{subMenu.name}</>
                  </Route>
                ))
                : null}
            </Routes>
            </React.Fragment>
          ))}
          <Routes>
            <Route path="/" element={<Dashboard />}/>
            <Route path="/news" element={<NewsBody  news={news} favorites={favorites} setFavorites={setFavorites}/>} />
            <Route path="/tips" element={<Tips favTips={favTips} setFavTips={setFavTips}/>}/>
            <Route path="/news/news-favs" element={<FavoritesNews news={news} favorites={favorites} setFavorites={setFavorites}/>}/>
            <Route path="/tips/fav-tips" element={<FavoritesTips  favTips={favTips} setFavTips={setFavTips}/>}/>
            <Route path="/cyber-jobs" element={<CyberRemoteJobs />}/>
            <Route path="/dev-jobs" element={<DevRemoteJobs devJobs={devJobs}/>}/>
          </Routes>
        </div>
    </div>
  );
}

export default App;


//element={<SidePanel news={news} favorites={favorites} setFavorites={setFavorites} ><NewsBody /></SidePanel>}
// element={<NewsBody news={news} favorites={favorites} setFavorites={setFavorites} />}