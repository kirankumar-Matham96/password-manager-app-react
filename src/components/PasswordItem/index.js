import './index.css'

const PasswordItem = props => {
  const {eachSavedItemData, onDeleteSavedItem} = props
  const {id, website, username, password, isShown} = eachSavedItemData

  const onClickDeleteButton = () => {
    onDeleteSavedItem(id)
  }

  return (
    <li className="password-item-container">
      <div className="initial">
        <p className="initial-text">{website.slice(0, 1).toUpperCase()}</p>
      </div>
      <div className="password-item-data-container">
        <div className="password-item-text-data-container">
          <p className="website-name">{website}</p>
          <p className="user-name">{username}</p>
          {isShown ? (
            <p className="password">{password}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="star-img"
            />
          )}
        </div>
        <button
          className="delete-button"
          type="button"
          onClick={onClickDeleteButton}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordItem
