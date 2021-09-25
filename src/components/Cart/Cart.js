import React from "react";
import "./Cart.css";

function Cart({ items }) {
  let itemsPrice = 0;
  let totalQuintity = 0;
  for (let item of items) {
    if (!item.quintity) {
      item.quintity = 1;
    }
    totalQuintity = totalQuintity + item.quintity;
    itemsPrice = item.price * totalQuintity;
  }
  let shipping = itemsPrice > 0 ? 15 : 0;
  let totalBeforTax = itemsPrice + shipping;
  let tax = totalBeforTax * 0.1;
  let total = totalBeforTax + tax;

  return (
    <>
      <h4>Order Summary</h4>
      <p>Items ordered: {totalQuintity}</p>
      <table>
        <tbody>
          <tr>
            <td>Items:</td>
            <td className="amount">${itemsPrice.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Shipping:</td>
            <td className="amount">${shipping.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Total before tax: </td>
            <td className="amount">${totalBeforTax.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Estimated Tax: </td>
            <td className="amount">${tax.toFixed(2)}</td>
          </tr>
          <tr>
            <td>
              <h3 className="order-total">Order Total:</h3>
            </td>
            <td className="amount">${total.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      <button className="place-order-btn btn">Place Order</button>
    </>
  );
}

export default Cart;
