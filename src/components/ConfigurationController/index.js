// Write your code here

import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const onChangeRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="configuration-control-container">
          <h1 className="layout-heading">Layout</h1>
          <div className="checkbox-group">
            <div className="checkbox-container">
              <input
                className="checkbox-content"
                id="content"
                checked={showContent}
                onChange={onChangeContent}
                type="checkbox"
              />
              <label className="label" htmlFor="content">
                Content
              </label>
            </div>

            <div className="checkbox-container">
              <input
                className="checkbox-left-navbar"
                id="leftNavbar"
                checked={showLeftNavbar}
                onChange={onChangeLeftNavbar}
                type="checkbox"
              />
              <label className="label" htmlFor="leftNavbar">
                Left Navbar
              </label>
            </div>

            <div className="checkbox-container">
              <input
                className="checkbox-content"
                id="rightNavbar"
                checked={showRightNavbar}
                onChange={onChangeRightNavbar}
                type="checkbox"
              />
              <label className="label" htmlFor="rightNavbar">
                Right Navbar
              </label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
