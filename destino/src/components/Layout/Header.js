import React, { useEffect, useState } from "react";
import {
  SearchOutlined,
  MenuOutlined,
  CloseCircleOutlined,
  TwitterOutlined,
  WhatsAppOutlined,
  QqOutlined,
  GitlabOutlined,
  GooglePlusOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [headerHeight, setHeaderHeight] = useState(120);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHeaderHeight(100);
      } else {
        setHeaderHeight(120);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //
  const [isOpen, setIsOpen] = useState(false);
  // const toggleNavbar = () => {
  //   setIsOpen(!isOpen);
  // };
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="header fixed-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark p-0 d-flex">
          <div
            className=" d-flex w-100 menu"
            style={{ height: `${headerHeight}px` }}
          >
            <a className="navbar-brand ms-4 pt-2 m-auto" href="/">
              <img className="img" src="/images/logo.png" alt="" />
              <div className="name_logo">
                <h6>DESTINO</h6>
                <p className="xs">TRAVEL AGENCY</p>
              </div>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
            >
              <MenuOutlined style={{ fontSize: "30px", color: "white" }} />
            </button>

            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "link-active" : "nav-link"
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "link-active" : "nav-link"
                    }
                    to="about"
                  >
                    {" "}
                    About us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "link-active" : "nav-link"
                    }
                    to="offers"
                  >
                    Offers
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "link-active" : "nav-link"
                    }
                    to="news"
                  >
                    News
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "link-active" : "nav-link"
                    }
                    to="contact"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
              <div className="search">
                <SearchOutlined style={{ fontSize: "30px", color: "white" }} />;
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* Menu Responsive  */}
      <div className={`${isOpen ? "nav_sm" : "hidden"}`}>
        <div className="menu_sm">
          <button
            className="close"
            onClick={() => setIsOpen(false)}
          >
            <CloseCircleOutlined style={{ fontSize: "30px", color: "black" }} />
          </button>
          <div className="mt-5 d-flex">
            <input type="text" />
            <SearchOutlined className="find" style={{ fontSize: "20px", color: "black" }}/>
          </div>
          <ul className="mt-5">
            <li className="">
              <NavLink onClick={closeMenu}
                className={({ isActive }) => (isActive ? "active" : "link")}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="">
              <NavLink onClick={closeMenu}
                className={({ isActive }) => (isActive ? "active" : "link")}
                to="about"
              >
                About us
              </NavLink>
            </li>
            <li className="">
              <NavLink onClick={closeMenu}
                className={({ isActive }) => (isActive ? "active" : "link")}
                to="offers"
              >
                Offers
              </NavLink>
            </li>
            <li className="">
              <NavLink onClick={closeMenu}
                className={({ isActive }) => (isActive ? "active" : "link")}
                to="news"
              >
                News
              </NavLink>
            </li>
            <li className="">
              <NavLink onClick={closeMenu}
                className={({ isActive }) => (isActive ? "active" : "link")}
                to="contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="d-flex ">
          
            <TwitterOutlined className="icon" />
            <WhatsAppOutlined  className="icon"/>
            <QqOutlined className="icon"/>
            <GooglePlusOutlined className="icon"/>
            <GitlabOutlined className="icon"/>
          
          </div>
          <p className="xs mt-2">Colorlib All rights reserved</p>
        </div>
      </div>
    </div>
  );
}
