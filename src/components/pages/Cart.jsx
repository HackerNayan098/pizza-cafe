import "../styles/cart.scss";
import Pepperoni from "../assets/pepperoni.jpg";

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart-list">
        {/* <h3> Right now Cart is empty</h3> */}
        <div className="cart-item">
          <div className="cart-item-data">
            <h4>Pepperoni Pizaa</h4>
            <h5> $ 5.60 </h5>
          </div>
          <div className="cart-item-img">
            <img src={Pepperoni} alt="" />
          </div>
        </div>

        <button className="order-button">Place Order</button>
      </div>
    </div>
  );
};

export default Cart;
