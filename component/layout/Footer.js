import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faRectangleList } from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";

function Footer() {
  return (
    <div className="mt-5 text-white" style={{ backgroundColor: "#FFDDDE" }}>
      <div className="">
        <div className="row gx-4 mt-5 p-3">
          <div className="col-md-2 d-flex justify-content-center align-items-center ">
            {/* logo part  section*/}
            <a className="navbar-brand" href="">
              <Image
                src="/home/logo.png"
                alt="Picture LOGO"
                width={75}
                height={75}
                className="logo "
              />
            </a>
          </div>
          <div className="d-flex flex-column col-md-8  justify-content-center align-items-center m-auto p-2">
            <div className="py-2   text-center">
              <a className="" aria-current="page" href="#">
                CONTACT US
              </a>
              <a className="mx-2 " href="#">
                ABOUT US
              </a>
              <a className=" " href="#">
                PRIVACY POLICY
              </a>
              <a className="mx-2" href="#">
                FAQS
              </a>
              <a className=" " href="#">
                TERMS OF US
              </a>
            </div>
            <div>
              <a className="p-1  m-auto" href="#">
                Copyright@Arshi365
              </a>
            </div>
          </div>
          <div className="col-md-2 d-flex justify-content-center align-items-center ">
            {/* logo part  section*/}
            <a className="navbar-brand" href="">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
            {/* logo part  section*/}
            <a className="navbar-brand" href="">
              <i className="fa  fa-twitter"></i>
            </a>
            {/* logo part  section*/}
            <a className="navbar-brand" href="">
              <i className="fa  fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
