import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faRectangleList } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
function Header() {
  const Button = styled.button`
    background-color: #c1706f;
  `;
  return (
    <header>
      {/* <!-- navbar --> */}
      <nav className="container navbar navbar-expand-lg pb-0">
        {/* web view */}
        <div className="container-fluid  ">
          {/* logo part  section*/}
          <div className="   ">
            <a className="navbar-brand" href="">
              <Image
                src="/home/logo.png"
                alt="ECOMMERCE  LOGO"
                width={75}
                height={75}
              />
            </a>
          </div>
          {/* search section */}
          <div className="w-50 d-flex justify-content-center align-items-center  responsive-search pe-4">
            {/* search part */}
            <div className="input-group ">
              <input
                type="text"
                className="form-control  "
                placeholder="Search for products, brands and more"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <Button
                  className="input-group-text"
                  type="submit"
                  style={{
                    backgroundColor: "#c1706f",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faSearch}
                    style={{
                      fontSize: 30,
                      color: "white",
                      backgroundColor: "#c1706f",
                    }}
                  />
                </Button>
              </div>
            </div>
          </div>
          {/* cart part */}
          <div className="d-flex   ">
            <Image
              src="/home/cart-logo.png"
              alt="CART-LOGO"
              width={55}
              height={52}
              className="d-inline-block align-text-top  "
            />
            <a href="" className="ms-1  text-decoration-none text-dark">
              MY CART
            </a>
          </div>
          {/*authentication section */}
          {/* login  */}
          <div className=" d-flex  ">
            <Image
              src="/home/icon-login.png"
              alt="Picture of the author"
              width={20}
              height={20}
              className="d-inline-block align-text-top  "
            />
            <a href="" className="ms-1   text-decoration-none text-dark">
              LOGIN
            </a>
          </div>
          {/* register  */}
          <div className="text-center d-flex   ms-1">
            <Image
              src="/home/icon-register.png"
              alt="icon-register"
              width={20}
              height={20}
              className=" ms-1"
            />
            <a href="" className="ms-1   text-decoration-none text-dark">
              REGISTER
            </a>
          </div>
        </div>
      </nav>
      {/* 2nd navbar */}
      <nav className="container navbar navbar-expand-lg m-auto text-center   ">
        <button
          className="navbar-toggler expand-button "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon
            icon={faRectangleList}
            style={{
              fontSize: 48,
              color: "#c1706f",
            }}
          />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav m-auto   mb-lg-0">
            {/* register  */}

            <li className="nav-item">
              <a
                href=""
                className="nav-link   active  ms-4 text-dark "
                aria-current="page"
              >
                <Image
                  src="/home/house-solid.png"
                  alt="Picture  house-solid"
                  width={20}
                  height={20}
                  className=" "
                />
              </a>
            </li>

            <li className="nav-item">
              <a
                href=""
                className="nav-link   active    text-dark "
                aria-current="page"
              >
                Today Deals
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link  ms-1 text-dark"
                aria-current="page"
                href="#"
              >
                Customer Care
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link ms-1 text-dark" href="#">
                Gift Cards
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link ms-1 text-dark" href="#">
                Tops
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link ms-1 text-dark" href="#">
                New Arrivals
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link ms-1 text-dark" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
