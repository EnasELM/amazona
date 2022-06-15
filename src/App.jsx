import { BrowserRouter, Route , Routes, Link } from "react-router-dom";
import './App.css'


import { render } from "react-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Cart from "./screens/Cart";
import SigninScreen from "./screens/SigninScreen";
import { useSelector } from "react-redux";

function App() {
  const userSignin = useSelector(state =>state.userSignin )
  const {userInfo} = userSignin;
    const openMenu = () => {
        document.querySelector('.sidebar').classList.add('open')
    }

    const closeMenu = () => {
        document.querySelector('.sidebar').classList.remove('open')
    }
    
    return ( 
      <BrowserRouter>
    
        <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/">amazona</Link>
          </div>
          <div className="header-links">
            <a href="cart.html">Cart</a>
            {
            userInfo ? <Link to="/profile">{userInfo.name}{console.log(userSignin,'appuserSignin')}</Link> : <Link to='/Signin'>Signin</Link>
            }
          <Link to='/Signin'>Signin</Link>
          </div>
        </header>
        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>x</button>
          <ul>
            <li>
              <a href="index.html">pants</a>
            </li>
  
            <li>
              <a href=" index.html ">shirts</a>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
          <Routes>
            <Route path="/" element={<HomeScreen />}></Route>
            <Route path="/signin" element={<SigninScreen/>} />
            <Route path="/cart/:id" element={<Cart/>}/>
            <Route path="/product/:id" element={<ProductScreen/>} />
            </Routes>
          
          </div>
        </main>
        <footer className="footer">All right</footer>
      </div>
      
      </BrowserRouter> 
    )
}

export default App