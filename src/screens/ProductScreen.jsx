import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import { detailsProduct } from "./actions/productActions";

function ProductScreen(props) {
     let navigate = useNavigate();
     const [qty, setQty] = useState(1)
    // const product = data.products.find(x => x._id === id);
    const productDetails = useSelector( state => state.productDetails)
    const {product, loading, error } = productDetails;
    const dispatch = useDispatch();
      let { id } = useParams(); 
    useEffect(() => {
        dispatch(detailsProduct(id));
        return () => {
          //
        };
    }, []);
   
    const handleAddToCart = () => {
        
        navigate(`/cart/${id}?qty=${qty}`)
    }
    return <div > 
        <div className="back-to-result">
          <Link to="/"> Back to result</Link>
        </div>
        {loading?  <div>Loading...</div>:
        error? <div>{error}</div>:
        (
            <div className="details">
            <div className="details-image">
                <img src={product.image} alt="product" />
            </div>
            <div className="details-info">
                <ul>
                    <li><h4>{product.name}</h4></li>
                    <li>{product.rating} Stars ({product.numReviews}) Reviews</li>
                    <li>Price : <b>${product.price}</b></li>
                    <li>Description <div>{product.description}</div></li>
                </ul>
            </div>
            <div className="details-action">
                <ul>
                    <li>
                        Price : {product.price}

                    </li>
                    <li>
                        Status : {product.countInStock > 0 ? "In Stock": "Out Of Stock"}
                        
                    </li>
                    <li>
                        Qty: <select value = {qty} name="" id="" onChange={(e) => {setQty(e.target.value)}}>
                           { [...Array(product.countInStock).keys()].map((x,index) => 
                           <option key={index} value={x+1}>{x+1}</option>
                            )}
                        </select>
                        
                    </li>
                    <li>
                        {product.countInStock>0 && <button onClick={handleAddToCart} className="button">Add To Cart</button>     }
                       
                    </li>
                </ul>
            </div>
            </div>
        )

         }

     
        </div>
}
export default ProductScreen;