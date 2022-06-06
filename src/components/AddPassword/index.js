import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import './index.css'

import SavedPasswords from '../SavedPasswords'

class AddPassword extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    savedPasswordsList: [],
    searchInput: '',
  }

  onWebsiteInputChange = event => {
    this.setState({website: event.target.value})
  }

  onUserNameInputChange = event => {
    this.setState({username: event.target.value})
  }

  onPasswordInputChange = event => {
    this.setState({password: event.target.value})
  }

  onFormSubmit = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const newListItem = {
      id: uuidv4(),
      website,
      username,
      password,
      isShown: false,
    }
    this.setState(prevState => ({
      savedPasswordsList: [...prevState.savedPasswordsList, newListItem],
      website: '',
      username: '',
      password: '',
    }))
  }

  onToggleVisibility = () => {
    this.setState(prevState => ({
      savedPasswordsList: prevState.savedPasswordsList.map(eachItem => ({
        ...eachItem,
        isShown: !eachItem.isShown,
      })),
    }))
  }

  onSearch = value => {
    this.setState({searchInput: value})
  }

  onDeleteSavedItem = id => {
    this.setState(prevState => ({
      savedPasswordsList: prevState.savedPasswordsList.filter(
        eachItem => eachItem.id !== id,
      ),
    }))
  }

  render() {
    const {
      website,
      username,
      password,
      savedPasswordsList,
      searchInput,
    } = this.state
    return (
      <div className="bg-container">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
        />
        <div className="add-password-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
            className="password-manager-img-small"
          />
          <form className="form-container">
            <h1 className="form-description">Add New Password</h1>
            <div className="input-item-container">
              <div className="icon-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="input-icon"
                />
              </div>
              <input
                type="text"
                placeholder="Enter Website"
                value={website}
                className="input-field"
                onChange={this.onWebsiteInputChange}
              />
            </div>
            <div className="input-item-container">
              <div className="icon-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="input-icon"
                />
              </div>
              <input
                type="text"
                placeholder="Enter Username"
                value={username}
                className="input-field"
                onChange={this.onUserNameInputChange}
              />
            </div>
            <div className="input-item-container">
              <div className="icon-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="input-icon"
                />
              </div>
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                className="input-field"
                onChange={this.onPasswordInputChange}
              />
            </div>
            <button
              type="submit"
              className="add-button"
              onClick={this.onFormSubmit}
            >
              Add
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="password-manager-img-big"
          />
        </div>
        <SavedPasswords
          savedPasswordsList={savedPasswordsList}
          onDeleteSavedItem={this.onDeleteSavedItem}
          onToggleVisibility={this.onToggleVisibility}
          searchInput={searchInput}
          onSearch={this.onSearch}
        />
      </div>
    )
  }
}

export default AddPassword
