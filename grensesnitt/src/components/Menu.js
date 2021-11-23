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
        id={1}
        typeOfProduct="pizza"
        title="MARGARITA"
        desc="Tomatsaus, fersk mozzarella og fersk basilikum."
        price={149}
      />
    ),
  },
  {
    item: (
      <Product
        id={2}
        typeOfProduct="pizza"
        title="Pepperoni"
        desc="Tomatsaus, mozzarella, pepperoni og oregano. Med paprika eller rødløk? +10 kr"
        price={189}
      />
    ),
  },
  {
    item: (
      <Product
        id={3}
        typeOfProduct="pizza"
        title="Prosciutto"
        desc="Tomatsaus, mozzarella, kokt skinke og oregano."
        price={189}
      />
    ),
  },
  {
    item: (
      <Product
        id={4}
        typeOfProduct="pizza"
        title="Parma"
        desc="Tomatsaus, mozzarella, ruccola, parmaskinke, pinjekjerner, basilikum og toppet med parmesan."
        price={204}
      />
    ),
  },
  {
    item: (
      <Product
        id={5}
        typeOfProduct="pizza"
        title="Salsiccia"
        desc="Tomatsaus, mozzarella, salsiccia, cherrytomater, rødløk og ruccola."
        price={204}
      />
    ),
  },
  {
    item: (
      <Product
        id={6}
        typeOfProduct="pizza"
        title="Capricciosa"
        desc="Tomatsaus, mozzarella, fersk sopp, skinke, pepperoni og oregano."
        price={204}
      />
    ),
  },
  {
    item: (
      <Product
        id={7}
        typeOfProduct="pizza"
        title="Diavola"
        desc="Tomatsaus, mozzarella, sterk italiensk salami, tallegio (italiensk ost), chili og oregano."
        price={199}
      />
    ),
  },
  {
    item: (
      <Product
        id={8}
        typeOfProduct="pizza"
        title="Amatriciana"
        desc="Tomatsaus, mozzarella, bacon og rødløk toppet med parmesan"
        price={199}
      />
    ),
  },
  {
    item: (
      <Product
        id={9}
        typeOfProduct="pizza"
        title="Pancetta"
        desc="Tomatsaus, mozzarella, bacon, gorgonzola og ruccola."
        price={204}
      />
    ),
  },
  {
    item: (
      <Product
        id={10}
        typeOfProduct="pizza"
        title="T.I.J Fenomenale"
        desc="Tomatsaus, mozzarella, salami piccante, pepperoni, ruccola og parmaskinke toppet med parmesan."
        price={209}
      />
    ),
  },
  {
    item: (
      <Product
        id={11}
        typeOfProduct="pizza"
        title="No Italiano"
        desc="Tomatsaus, mozzarella, döner, salatmix toppet med hjemmelaget dressing."
        price={209}
      />
    ),
  },
  {
    item: (
      <Product
        id={12}
        typeOfProduct="pizza"
        title="Filetto Biff"
        desc="Tomatsaus, mozzarella, paprika, rødløk, biff, hvitløksolje og oregano."
        price={204}
      />
    ),
  },
];

const pastaItems = [
  {
    item: (
      <Product
        id={13}
        typeOfProduct="pasta"
        title="BIGOLI ALLA PUTTANESCA"
        desc="Lang pasta med Puttanesca (capers, tomat, oliven, chili, ansjos og krutonger) (hveteglut, fisk)"
        price={193}
      />
    ),
  },
  {
    item: (
      <Product
        id={14}
        typeOfProduct="pasta"
        title="PAPPARDELLE AL RAGÙ DI CINGHIALE"
        desc="Pappardelle med villsvinragù (selleri, sulfit, hveteglut, egg)"
        price={212}
      />
    ),
  },
  {
    item: (
      <Product
        id={15}
        typeOfProduct="pasta"
        title="LINGUINE ALLA PESCATORA"
        desc="Linguine med blåskjell, scampi og blekksprut (hveteglut, bløtdyr, skalldyr, sulfit)"
        price={203}
      />
    ),
  },
  {
    item: (
      <Product
        id={16}
        typeOfProduct="pasta"
        title="RIGATONI PARTENOPEI"
        desc="Rigatoni med salsiccia(italiensk fersk pølse), ricotta og friarielli (hveteglut, melk, egg)"
        price={195}
      />
    ),
  },
  {
    item: (
      <Product
        id={17}
        typeOfProduct="pasta"
        title="RAVIOLI TRICOLORE"
        desc="Pastaputer fylt med mozzarella, San Marzano DOP tomater og basilikumpesto, servert med tomatsaus, burratakrem og fersk basilikum (hvetegluten, melk, egg, pinjekjerner)"
        price={209}
      />
    ),
  },
  {
    item: (
      <Product
        id={18}
        typeOfProduct="pasta"
        title="RISOTTO ALLA CONTADINA"
        desc="Risotto med salsiccia, pioppinisopp og rødvinssaus (melk, egg, sulfitt, selleri)"
        price={207}
      />
    ),
  },
  {
    item: (
      <Product
        id={19}
        typeOfProduct="pasta"
        title="RIGATONI CACIO E PEPE"
        desc="Kort pasta med pecorino, parmesan og pepper (hvetegluten, egg, melk)"
        price={196}
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
      <div className="end-pizza"></div>

      <h1 className="pasta-header">PASTA</h1>
      <div className="pasta-container">{renderPastaItem()}</div>
    </div>
  );
}

export default Menu;
