import React,{useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams , useSearchParams, useNavigate } from "react-router-dom";
import { addToCart, removeFromCart } from "./actions/cartActions";
function Cart(props){
    let navigate = useNavigate();
    const cart = useSelector(state => state.cart);
    const {cartItems} = cart
    let qty=0;
    let params=useParams()
    const [searchParams] = useSearchParams();
    let productId=params.id;
for (const entry of searchParams.entries()) {
    const [param, value] = entry;
    qty=value;
   
  }
const dispatch = useDispatch();
const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));

}
  useEffect(() => {
      if(productId){
        console.log( qty,' value');
          dispatch(addToCart(productId, qty))
      }
     
  }, []);
   const checkoutHandler = () => {
    navigate(`/signin?redirect=shipping`)
   }
    return <div className="cart">
        <div className="cart-list">
           <ul className="cart-list-container">
               <li>
                   <h3>
                       Shopping Cart
                   </h3>
                   <div>
                       Price
                   </div>
               </li>
               {
               cartItems === undefined  || cartItems.length === 0? 
               <div>
                   Cart is Empty
               </div>
               :
               cartItems.map((item,index) => 
               <li>
                   <div div className="cart-image" key={index}>
                   <img src={item.image} alt="product" />
                   </div>
              
               
                    
                    <div className=""cart-name>
                        <div>
                           <Link to={`/product/${item.product}`}>
                           {item.name}
                           </Link>
                          
                        </div>
                        <div>
                            Qty:
                            <select value={item.qty} onChange={(e) => dispatch(addToCart(item.product, e.target.value))}>
                                {[...Array(item.countInStock).keys()].map(x => 
                                    <option key={x+1} value={x+1}>{x+1} </option>)
                                }
                                   
                            </select>
                            <button  type="button" className="button-delete" onClick={() => removeFromCartHandler(item.product)}>
                                Delete
                            </button>
                        </div>
                    </div>
                    <div className="cart-price">
                        ${item.price}
                    </div>
              
                  </li>)
              
               }
           </ul>
        </div>
        <div className="cart-action">
            <h3>
                Subtotal ( {parseInt(cartItems.reduce((a,c) => a + c.qty,0))}  items)
                :
               ${cartItems.reduce((a,c) => a + c.price*c.qty,0)}
            </h3>
           <button onClick={checkoutHandler} className="button primary full-width" disabled={cartItems.length===0}>
               Proceed to Checkout
           </button>

        </div>
    </div>
}

export default Cart;