import React, { useState, useEffect } from "react";
import axios from "axios";
import CardProduct from "../components/CardProduct";

const ListMenu = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/komponens");
    setProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return(
    <div className="w-max mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">{
        products.map((item) => (
            <CardProduct
              key={item.id}
              nama={item.nama}
              harga={item.harga}
              img={item.url}
              id={item.id}
            />
          ))
          }

    </div>
    
  ) 
};
export default ListMenu;