import { Sorting } from "../Sorting/Sorting";
import { useLastName } from "./use-lastName"


export const LastName = ({ sortValue, setUsers, setLimit, setTotalUsers }) => {
    const { lastNameRef, handleKeyDownLastName, isMenuOpenLastName, toggleMenuLastName, setLastName, searchByLastName, lastName, setIsMenuOpenLastName } = useLastName(setUsers, setLimit, setTotalUsers, sortValue);

    return (
        <div className="lastName" ref={lastNameRef}
            onKeyDown={handleKeyDownLastName}>
            LastName
            <img src="./images/dropdown.svg" alt="dropdown" width='22px' className={`lastName__icon ${isMenuOpenLastName ? 'lastName__icon--rotated' : ''
                }`} onClick={toggleMenuLastName} />
            <div className={`lastName__menu ${isMenuOpenLastName ? 'lastName__menu--visible' : ''
                }`}>
                <div className="search">
                    <input type="search" placeholder="LastName..." className='search__input' onChange={(e) => setLastName(e.target.value)} />
                    <div className="search__btn"><img src="./images/search.svg" alt="search" width='14px' onClick={() => searchByLastName(lastName)} /></div>
                </div >
                <Sorting sortValue={sortValue} nameSort={"lastName"} setMenuOpen={setIsMenuOpenLastName} setUsers={setUsers} setLimit={setLimit} setTotalUsers={setTotalUsers} />
            </div>
        </div>
    )
}