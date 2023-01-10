import { useEffect, useState } from 'react';
import cart from './Cart.module.css';
import cartpage from './img/cartimg.jpeg';
import { useNavigate } from 'react-router-dom';
function Cart() {
  let navigate = useNavigate();
  let [item, setItem] = useState({
    category_id: 3,
    category_name: 'mobiles',
    image: 'https://i.ibb.co/6bZc0zJ/f6b32d514024.jpg',
    description: 'realme 9 (Stargaze White, 128 GB)',
    stars: 4.3,
    ratings: '4,161 Ratings ',
    reviews: ' 310 Reviews',
    warranty:
      '1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In-Box Accessories',
    new_price: 34998,
    old_price: 41998,
    discount: 40,
    delivery_type: 'Free delivery',
    offer: '₹16,750',
    offer2: ' Off on Exchange',
    hidden_stars: 4.3,
    item_id: 1,
    quantity: 1,
  });
  // let [quantity,setQuantity]=useState(1);
  function decreament(q) {
    if (q > 1) {
      setItem({ ...item, quantity: q - 1 });
      // setQuantity(quantity-1)
      // localStorage.setItem("Products",JSON.stringify(item))
    }
  }
  function increament(q) {
    if (q < 5) {
      setItem({ ...item, quantity: q + 1 });
      // setQuantity(quantity+1)
      // localStorage.setItem("Products",JSON.stringify(item))
    }
  }
  function localupdate() {
    localStorage.setItem('checkout', JSON.stringify(item));
    navigate('/checkout');
  }

  return (
    <>
      <div className={cart.maindiv}>
        <div id={cart.leftside}>
          <div>
            {' '}
            <img src={cartpage} alt="" />
          </div>
          <div id={cart.buttonsdiv}>
            <div id={cart.subdiv}>
              <button onClick={() => decreament(item.quantity)}>-</button>
            </div>
            <div id={cart.quantityinput}>
              {' '}
              <input type="number" value={item.quantity} />
            </div>
            <div id={cart.subdiv}>
              <button onClick={() => increament(item.quantity)}>+</button>
            </div>
            <div id={cart.buttontextdiv}>
              <button>SAVE FOR LATER</button>
            </div>
            <div id={cart.buttontextdiv}>
              <button>REMOVE</button>
            </div>
          </div>
          <div id={cart.placediv}>
            <button onClick={localupdate}>PLACE ORDER</button>
          </div>
        </div>

        <div id={cart.rightside}>
          <div id={cart.rightchilddiv}>
            <div id={cart.pricedetail}>
              <p>PRICE DETAILS</p>
              <hr />
            </div>

            <div id={cart.orignalpricediv}>
              <div>
                <p>Price</p>
              </div>
              <div>
                <p>₹ {item.old_price * item.quantity}</p>
              </div>
            </div>
            <div id={cart.orignalpricediv}>
              <div>
                <p>Quantity</p>
              </div>
              <div>
                <p>{item.quantity}</p>
              </div>
            </div>
            <div id={cart.orignalpricediv}>
              <div>
                <p>Discount</p>
              </div>
              <div>
                <p>−₹ {(item.old_price * item.quantity * 0.16).toFixed(2)}</p>
              </div>
            </div>
            <div id={cart.orignalpricediv}>
              <div>
                <p>Delivery Charges</p>
              </div>
              <div>
                <p>Free</p>
              </div>
            </div>
            <hr />
            <div id={cart.orignalpricediv}>
              <div>
                <p>Total Amount</p>
              </div>
              <div>
                <p>{(item.old_price * item.quantity * 0.84).toFixed(2)}</p>
              </div>
            </div>
            <hr />
            <div>
              <p
                style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  fontFamily: 'Roboto, Arial, sans-serif',
                  lineHeight: '22px',
                  color: '#388e3c',
                }}
              >
                You will save ₹
                {(item.old_price * item.quantity * 0.16).toFixed(2)} on this
                order
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cart;

// let Products={
//     "category_id": 3,
//     "category_name": "mobiles",
//     "image": "https://i.ibb.co/6bZc0zJ/f6b32d514024.jpg",
//     "description": "realme 9 (Stargaze White, 128 GB)",
//     "stars": 4.3,
//     "ratings": "4,161 Ratings ",
//     "reviews": " 310 Reviews",
//     "warranty": "1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In-Box Accessories",
//     "new_price": 1799,
//     "old_price": 2999,
//     "discount": 40,
//     "delivery_type": "Free delivery",
//     "offer": "₹16,750",
//     "offer2": " Off on Exchange",
//     "hidden_stars": 4.3,
//     "item_id": 1,
//     "quantity":1
// }
// localStorage.setItem("Products", JSON.stringify(Products));
