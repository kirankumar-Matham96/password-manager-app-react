import PasswordItem from '../PasswordItem'
import './index.css'

const SavedPasswords = props => {
  const {savedPasswordsList, onToggleVisibility, onSearch, searchInput} = props
  const searchedDataInTheList = savedPasswordsList.filter(eachData =>
    eachData.website.includes(searchInput.toLowerCase()),
  )

  const onChangeSearchInput = event => {
    onSearch(event.target.value)
  }

  const onClickShowButton = () => {
    onToggleVisibility()
  }

  const {onDeleteSavedItem} = props

  return (
    <div className="saved-passwords-container">
      <div className="your-passwords-container">
        <div className="your-passwords-text-container">
          <h1 className="your-passwords-text">Your Passwords</h1>
          <p className="count">{savedPasswordsList.length}</p>
        </div>
        <div className="search-container">
          <div className="search-icon-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              alt="search"
              className="search-icon"
            />
          </div>
          <input
            type="search"
            placeholder="Search"
            className="search-input"
            value={searchInput}
            onChange={onChangeSearchInput}
          />
        </div>
      </div>
      <hr className="h-line" />
      <div className="show-passwords-container">
        <input
          type="checkbox"
          className="checkbox"
          name="checkbox"
          id="checkbox"
          onChange={onClickShowButton}
        />
        <label className="show-passwords-text" htmlFor="checkbox">
          Show Passwords
        </label>
      </div>
      {searchedDataInTheList.length === 0 ? (
        <div className="no-passwords-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            alt="no passwords"
            className="no-passwords-img"
          />
          <p className="no-passwords-text">No Passwords</p>
        </div>
      ) : (
        <ul className="password-items-container">
          {searchedDataInTheList.map(eachSavedItemData => (
            <PasswordItem
              eachSavedItemData={eachSavedItemData}
              key={eachSavedItemData.id}
              onDeleteSavedItem={onDeleteSavedItem}
            />
          ))}
        </ul>
      )}
    </div>
  )
}

export default SavedPasswords
