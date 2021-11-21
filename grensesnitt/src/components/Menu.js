import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./Menu.css";

const pizzaItems = [
  {
    item: (
      <div className="pizza-item">
        <h3>MARGHERITA</h3>
        <p>Tomatsaus, fersk mozzarella og fersk basilikum.</p>
        <p>119,-/149</p>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Legg til
        </Button>
      </div>
    ),
  },
  {
    item: (
      <div className="pizza-item">
        <h3>BIFF</h3>
        <p>Tomatsaus, fersk mozzarella og fersk basilikum.</p>
        <p>119,-/149</p>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Legg til
        </Button>
      </div>
    ),
  },
  {
    item: (
      <div className="pizza-item">
        <h3>BIFF</h3>
        <p>Tomatsaus, fersk mozzarella og fersk basilikum.</p>
        <p>119,-/149</p>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Legg til
        </Button>
      </div>
    ),
  },
  {
    item: (
      <div className="pizza-item">
        <h3>BIFF</h3>
        <p>Tomatsaus, fersk mozzarella og fersk basilikum.</p>
        <p>119,-/149</p>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Legg til
        </Button>
      </div>
    ),
  },
  {
    item: (
      <div className="pizza-item">
        <h3>BIFF</h3>
        <p>Tomatsaus, fersk mozzarella og fersk basilikum.</p>
        <p>119,-/149</p>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Legg til
        </Button>
      </div>
    ),
  },
  {
    item: (
      <div className="pizza-item">
        <h3>BIFF</h3>
        <p>Tomatsaus, fersk mozzarella og fersk basilikum.</p>
        <p>119,-/149</p>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Legg til
        </Button>
      </div>
    ),
  },
  {
    item: (
      <div className="pizza-item">
        <h3>BIFF</h3>
        <p>Tomatsaus, fersk mozzarella og fersk basilikum.</p>
        <p>119,-/149</p>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Legg til
        </Button>
      </div>
    ),
  },
  {
    item: (
      <div className="pizza-item">
        <h3>BIFF</h3>
        <p>Tomatsaus, fersk mozzarella og fersk basilikum.</p>
        <p>119,-/149</p>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Legg til
        </Button>
      </div>
    ),
  },
  {
    item: (
      <div className="pizza-item">
        <h3>BIFF</h3>
        <p>Tomatsaus, fersk mozzarella og fersk basilikum.</p>
        <p>119,-/149</p>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Legg til
        </Button>
      </div>
    ),
  },
  {
    item: (
      <div className="pizza-item">
        <h3>BIFF</h3>
        <p>Tomatsaus, fersk mozzarella og fersk basilikum.</p>
        <p>119,-/149</p>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Legg til
        </Button>
      </div>
    ),
  },
  {
    item: (
      <div className="pizza-item">
        <h3>BIFF</h3>
        <p>Tomatsaus, fersk mozzarella og fersk basilikum.</p>
        <p>119,-/149</p>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Legg til
        </Button>
      </div>
    ),
  },
  {
    item: (
      <div className="pizza-item">
        <h3>BIFF</h3>
        <p>Tomatsaus, fersk mozzarella og fersk basilikum.</p>
        <p>119,-/149</p>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Legg til
        </Button>
      </div>
    ),
  },
];

const renderPizzaItem = () => {
  return (
    <>
      {pizzaItems.map((pizzaItem) => {
        return pizzaItem.item;
      })}
    </>
  );
};

function Menu() {
  return (
    <div className="menu-container">
      <h1 className="pizza-header">PIZZAS</h1>
      <div className="pizza-container">{renderPizzaItem()}</div>
    </div>
  );
}

export default Menu;
