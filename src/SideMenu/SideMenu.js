import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import image from "./Cyber.jpg"


export const menuItems = [
  {
    name: "Dashboard",
    exact: true,
    to: "/",
    iconClassName: "bi bi-speedometer2",
  },
  {
    name: "News",
    exact: true,
    to: `/news`,
    iconClassName: "bi bi-speedometer2",
  },
  { name: "Tips", to: `/tips`, iconClassName: "bi bi-vector-pen" },
  {
    name: "Favorites",
    exact: true,
    to: `/news/news-favs`,
    iconClassName: "bi bi-speedometer2",
    subMenus: [
      { name: "Favorite News", to: "/news/news-favs" },
      { name: "Favorite Tips", to: "/tips/fav-tips" },
    ],
  },
  { name: "Cyber Remote Jobs", to: `/cyber-jobs`, iconClassName: "bi bi-vector-pen" },
  { name: "Dev Remote Jobs", to: `/dev-jobs`, iconClassName: "bi bi-vector-pen" },
];



export default function SideMenu(props) {
  
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    if (inactive) {
      removeActiveClassFromSubMenu();
    }

    props.onCollapse(inactive);
  }, [inactive]);

  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll(".sub-menu").forEach((el) => {
      el.classList.remove("active");
    });
  };

  useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        menuItems.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);

 
  return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
    <div className="top-section">
      <div className="logo">
        <img src={image} alt="cyber" />
      </div>
      <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
        {inactive ? (
          <i class="bi bi-arrow-right-square-fill"></i>
        ) : (
          <i class="bi bi-arrow-left-square-fill"></i>
        )}
      </div>
    </div>

    <div className="search-controller">
      <button className="search-btn">
        <i class="bi bi-search"></i>
      </button>

      <input type="text" placeholder="search" />
    </div>

    <div className="divider"></div>

    <div className="main-menu">
      <ul>
        {menuItems.map((menuItem, index) => (
          <MenuItem
            key={index}
            name={menuItem.name}
            exact={menuItem.exact}
            to={menuItem.to}
            subMenus={menuItem.subMenus || []}
            iconClassName={menuItem.iconClassName}
            onClick={(e) => {
              if (inactive) {
                setInactive(false);
              }
            }}
          />
        ))}
    </ul>
      </div>

      <div className="side-menu-footer">
        <div className="avatar">
          <img src={image} alt="user" />
        </div>
        <div className="user-info">
          <h5>Brian Hardy</h5>
          <p>Brian.Hardy67@gmail.com</p>
        </div>
      </div>
    </div>
  )
}








//colors 
//backgroundColor: 'rgb(18, 18, 18)'
//backgroundColor: 'rgb(39,39,39)'

//buttons
// <SidePanelButtons />

//{ news, favorites, setFavorites }