import logo from "./logo.svg";
import "./App.css";

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          {" "}
          <button onClick={openMenu}> `&#9776;` </button>{" "}
          <a href="index.html"> amazona </a>{" "}
        </div>{" "}
        <div className="header-links">
          <a href="cart.html"> Cart </a> <a href="signin.html"> Signin </a>{" "}
        </div>{" "}
      </header>{" "}
      <aside classNameName="sidebar">
        <h3> Shopping Categories </h3>{" "}
        <button className="sidebar-close-button" onClick={closeMenu}>
          x{" "}
        </button>{" "}
        <ul>
          <li>
            <a href="index.html"> pants </a>{" "}
          </li>{" "}
          <li>
            <a href=" index.html "> shirts </a>{" "}
          </li>{" "}
        </ul>{" "}
      </aside>{" "}
      <main className="main">
        <div className="content">
          <ul className="products">
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="/images/d1.jpg"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html"> Slim Shirt </a>{" "}
                </div>{" "}
                <div className="product-brand"> Nike </div>{" "}
                <div className="product-price"> $60 </div>{" "}
                <div className="product-rating"> 4.5 Stars(10 reviews) </div>{" "}
              </div>{" "}
            </li>{" "}
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="images/d1.jpg"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html"> Slim Shirt </a>{" "}
                </div>{" "}
                <div className="product-brand"> Nike </div>{" "}
                <div className="product-price"> $60 </div>{" "}
                <div className="product-rating"> 4.5 Stars(10 reviews) </div>{" "}
              </div>{" "}
            </li>{" "}
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="images/d1.jpg"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html"> Slim Shirt </a>{" "}
                </div>{" "}
                <div className="product-brand"> Nike </div>{" "}
                <div className="product-price"> $60 </div>{" "}
                <div className="product-rating"> 4.5 Stars(10 reviews) </div>{" "}
              </div>{" "}
            </li>{" "}
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="images/d1.jpg"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html"> Slim Shirt </a>{" "}
                </div>{" "}
                <div className="product-brand"> Nike </div>{" "}
                <div className="product-price"> $60 </div>{" "}
                <div className="product-rating"> 4.5 Stars(10 reviews) </div>{" "}
              </div>{" "}
            </li>{" "}
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="images/d1.jpg"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html"> Slim Shirt </a>{" "}
                </div>{" "}
                <div className="product-brand"> Nike </div>{" "}
                <div className="product-price"> $60 </div>{" "}
                <div className="product-rating"> 4.5 Stars(10 reviews) </div>{" "}
              </div>{" "}
            </li>{" "}
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="images/d1.jpg"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html"> Slim Shirt </a>{" "}
                </div>{" "}
                <div className="product-brand"> Nike </div>{" "}
                <div className="product-price"> $60 </div>{" "}
                <div className="product-rating"> 4.5 Stars(10 reviews) </div>{" "}
              </div>{" "}
            </li>{" "}
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="images/d1.jpg"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html"> Slim Shirt </a>{" "}
                </div>{" "}
                <div className="product-brand"> Nike </div>{" "}
                <div className="product-price"> $60 </div>{" "}
                <div className="product-rating"> 4.5 Stars(10 reviews) </div>{" "}
              </div>{" "}
            </li>{" "}
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="images/d1.jpg"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html"> Slim Shirt </a>{" "}
                </div>{" "}
                <div className="product-brand"> Nike </div>{" "}
                <div className="product-price"> $60 </div>{" "}
                <div className="product-rating"> 4.5 Stars(10 reviews) </div>{" "}
              </div>{" "}
            </li>{" "}
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="images/d1.jpg"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html"> Slim Shirt </a>{" "}
                </div>{" "}
                <div className="product-brand"> Nike </div>{" "}
                <div className="product-price"> $60 </div>{" "}
                <div className="product-rating"> 4.5 Stars(10 reviews) </div>{" "}
              </div>{" "}
            </li>{" "}
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="images/d1.jpg"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html"> Slim Shirt </a>{" "}
                </div>{" "}
                <div className="product-brand"> Nike </div>{" "}
                <div className="product-price"> $60 </div>{" "}
                <div className="product-rating"> 4.5 Stars(10 reviews) </div>{" "}
              </div>{" "}
            </li>{" "}
          </ul>{" "}
        </div>{" "}
      </main>{" "}
      <footer className="footer"> All right </footer>{" "}
    </div>
  );
}

export default App;
