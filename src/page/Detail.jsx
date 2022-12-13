import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CardProduct from "../components/CardProduct";

const Detail = () => {
  const { id } = useParams();
  const [menu, setMenu] = useState("");

  const getMenu = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/komponen/${id}`);
      setMenu(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <div className="mt-20">
    <CardProduct
      nama={menu.nama}
      harga={menu.harga}
      deskripsi={menu.deskripsi}
      img={menu.url}
      id={menu.id}
    />
    </div>
  );
};

export default Detail;
