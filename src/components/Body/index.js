// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="left-navbar-container">
              <h1 className="left-navbar-heading">Left Navbar Menu</h1>
              <ul className="left-navbar-list">
                <li className="left-navbar-item">Item 1</li>
                <li className="left-navbar-item">Item 2</li>
                <li className="left-navbar-item">Item 3</li>
                <li className="left-navbar-item">Item 4</li>
              </ul>
            </div>
          ) : null}

          {showContent ? (
            <div className="content-container">
              <h1 className="content-heading">Content</h1>
              <p className="content-description">
                Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
                eiusmod tempor incidiunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          ) : null}

          {showRightNavbar ? (
            <div className="right-navbar-container">
              <h1 className="right-navbar-heading">Right Navbar</h1>
              <div className="adding-box-container">
                <p className="add-box">Ad 1</p>
                <p className="add-box">Ad 2</p>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
