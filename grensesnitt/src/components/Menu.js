import React, { useState, useEffect } from "react";
import "../App.css";
import { useStateValue } from "../StateProvider";
import { Button } from "./Button";
import "./Menu.css";
import Product from "./Product";


  const pizzaItems = [
    {
      item: (
        <Product
          typeOfProduct="pizza"
          title="MARGARITA"
          desc="Tomatsaus, fersk mozzarella og fersk basilikum."
          price={199}
        />
      ),
    },
    {
      item: (
        <Product
          typeOfProduct="pizza"
          title="BIFF"
          desc="Tomatsaus, fersk mozzarella og fersk basilikum."
          price={250}
        />
      ),
    },
    {
      item: (
        <Product
          typeOfProduct="pizza"
          title="KYLLING"
          desc="Tomatsaus, fersk mozzarella og fersk basilikum."
          price={178}
        />
      ),
    },
    {
      item: (
        <Product
          typeOfProduct="pizza"
          title="MARGARITA"
          desc="Tomatsaus, fersk mozzarella og fersk basilikum."
          price={199}
        />
      ),
    },
    {
      item: (
        <Product
          typeOfProduct="pizza"
          title="MARGARITA"
          desc="Tomatsaus, fersk mozzarella og fersk basilikum."
          price={199}
        />
      ),
    },
    {
      item: (
        <Product
          typeOfProduct="pizza"
          title="MARGARITA"
          desc="Tomatsaus, fersk mozzarella og fersk basilikum."
          price={199}
        />
      ),
    },
    {
      item: (
        <Product
          typeOfProduct="pizza"
          title="MARGARITA"
          desc="Tomatsaus, fersk mozzarella og fersk basilikum."
          price={199}
        />
      ),
    },
    {
      item: (
        <Product
          typeOfProduct="pizza"
          title="MARGARITA"
          desc="Tomatsaus, fersk mozzarella og fersk basilikum."
          price={199}
        />
      ),
    },
  ];

  const pastaItems = [
    {
      item: (
        <Product
          typeOfProduct="pasta"
          title="BIGOLI ALLA PUTTANESCA"
          desc="Lang pasta med Puttanesca"
          price="163"
        />
      ),
    },
    {
      item: (
        <Product
          typeOfProduct="pasta"
          title="LINGUINE ALLA PESCATORA"
          desc="Linguine med blåskjell, scampi og blekksprut"
          price="210"
        />
      ),
    },
    {
      item: (
        <Product
          typeOfProduct="pasta"
          title="RAVIOLI TRICOLORE"
          desc="  Pastaputer fylt med mozzarella, San Marzano DOP tomater og
            basilikumpesto, servert med tomatsaus, burratakrem og fersk
            basilikum"
          price="229"
        />
      ),
    },
    {
      item: (
        <Product
          typeOfProduct="pasta"
          title="PAPPARDELLE AL RAGU DI CINGHIALE"
          desc="Pappadelle med villsvinragu"
          price="235"
          //  onClick={}
        />
      ),
    },
    {
      item: (
        <Product
          typeOfProduct="pasta"
          title="RIGATONI CACIO PEPE"
          desc="Kort pasta med peccorino, parmesan og pepper"
          price="192"
          //  onClick={}
        />
      ),
    },
    {
      item: (
        <Product
          typeOfProduct="pasta"
          title="RIGATONI CACIO PEPE"
          desc="Kort pasta med peccorino, parmesan og pepper"
          price="192"
          //  onClick={}
        />
      ),
    },
  ];

function Menu() {
  const renderPizzaItem = () => {
    return (
      <>
        {pizzaItems.map((pizzaItem) => {
          return pizzaItem.item;
        })}
      </>
    );
  };

  const renderPastaItem = () => {
    return (
      <>
        {pastaItems.map((pastaItem) => {
          return pastaItem.item;
        })}
      </>
    );
  };

  return (
    <div className="menu-container">
      <h1 className="pizza-header">PIZZAS</h1>
      <div className="pizza-container">{renderPizzaItem()}</div>

      <h1 className="pasta-header">PASTA</h1>
      <div className="pasta-container">{renderPastaItem()}</div>
    </div>
  );
}

export default Menu;
