// import React from "react";
// import HorizontalGallery from "react-dynamic-carousel";
// import Carousel from "/component/home/Carousel";

// function index() {
//   return (
//     <div className="container">
//       <Carousel />

//     </div>
//   );
// }

// export default index;

import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { useCart } from "react-use-cart";
import axios, { Axios } from "axios";
import Skeleton from "react-loading-skeleton";

const Products = () => {
  const { addItem } = useCart();
  const { data, error } = useSWR(
    "https://arshi365.lamptechs.com/api/admin/products",
    // { fetcher: async (url) => await fetch(url).then((res) => res.json()) }
    { fetcher: async (url) => await axios.get(url).then((res) => res.data) }
  );

  return (
    <div className="container">
      {/* <h3 className="fs-1 fw-bolder pt-3" style={{ color: "#ff8095" }}>
        Top selected
      </h3> */}
      <div className="row    text-center my-2 py-2 ">
        {data ? (
          data.map((product) => (
            <Link key={product.id} href={`productList/${product.id}`} passHref>
              <div className="col-sm-12 col-md-4 p-2  ">
                <div className="card border-0 " style={{ width: "22rem" }}>
                  {/* <Image
                    src="/images/jacket-1.png"
                    alt="E-COMMERCE  products"
                    className="card-img-top  p-2  "
                    width={336}
                    height={336}
                  /> */}
                  {/* egheherher */}

                  {/* <img
                  src={`data:image/jpeg;base64,${product.image_one}`}
                  alt="E-COMMERCE  products"
                  className="card-img-top  p-2  "
                  width={336}
                  height={336}
                /> */}
                  {/* arshi365.lamptechs.com/public/upload/1653134779.png */}
                  <img
                    src={product.image_two}
                    alt="E-COMMERCE  products"
                    className="card-img-top  p-2  "
                    width={434}
                    height={475}
                  />
                  {/* <Image
                  src={`data:image/jpeg;base64,${product.image_one}`}
                  alt="E-COMMERCE  products"
                  className="card-img-top  p-2  "
                  width={336}
                  height={336}
                /> */}
                  <div className="card-body">
                    <h6 className="card-title fs-6 fw-bolder">
                      {product.short_description}
                    </h6>
                    <p
                      className="text-center fs-5 fw-bolder "
                      style={{
                        color: "#ff8095",
                        border: 0,
                      }}
                    >
                      ৳{product.price}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="row    text-center my-2 py-2 ">
            <div className="col-sm-12 col-md-4 p-2  ">
              <Skeleton height={300} />
            </div>
            <div className="col-sm-12 col-md-4 p-2  ">
              <Skeleton height={300} />
            </div>
            <div className="col-sm-12 col-md-4 p-2  ">
              <Skeleton height={300} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
