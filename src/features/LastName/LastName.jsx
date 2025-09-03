import { Sorting } from "../Sorting/Sorting";
import { useLastName } from "./use-lastName"

import dropdownIcon from '@/assets/images/dropdown.svg';
import searchIcon from '@/assets/images/search.svg';

export const LastName = ({ sortValue, setUsers, setLimit, setTotalUsers, columnWidths }) => {
    const { lastNameRef, handleKeyDownLastName, isMenuOpenLastName, toggleMenuLastName, setLastName, searchByLastName, lastName, setIsMenuOpenLastName } = useLastName(setUsers, setLimit, setTotalUsers, sortValue);

    return (
        <div className="lastName" ref={lastNameRef}
            onKeyDown={handleKeyDownLastName}>
                { columnWidths.lastName < 100 ? '' : 'LastName' }
            <img src={dropdownIcon} alt="dropdown" width='22px' className={`lastName__icon ${isMenuOpenLastName ? 'lastName__icon--rotated' : ''
                }`} onClick={toggleMenuLastName} />
            <div className={`lastName__menu ${isMenuOpenLastName ? 'lastName__menu--visible' : ''
                }`}>
                <div className="search">
                    <input type="search" placeholder="LastName..." className='search__input' onChange={(e) => setLastName(e.target.value)} />
                    <div className="search__btn"><img src={searchIcon} alt="search" width='14px' onClick={() => searchByLastName(lastName)} /></div>
                </div >
                <Sorting sortValue={sortValue} nameSort={"lastName"} setMenuOpen={setIsMenuOpenLastName} setUsers={setUsers} setLimit={setLimit} setTotalUsers={setTotalUsers} />
            </div>
        </div>
    )
}