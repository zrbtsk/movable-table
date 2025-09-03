
import { Sorting } from "../Sorting/Sorting";
import { useFirstName } from "./use-firstName"

import dropdownIcon from '@/assets/images/dropdown.svg';
import searchIcon from '@/assets/images/search.svg';


export const FirstName = ({ sortValue, setUsers, setLimit, setTotalUsers, columnWidths }) => {
    const { firstName, firstNameRef, handleKeyDownFirstName, isMenuOpenFirstName, toggleMenuFirstName, setFirstName, searchByFirstName, setIsMenuOpenFirstName } = useFirstName(setUsers, setLimit, setTotalUsers, sortValue)

    return (
        <div className="firstName" ref={firstNameRef}
            onKeyDown={handleKeyDownFirstName} >
                { columnWidths.firstName < 100 ? '' : 'FirstName' }
            <img src={dropdownIcon} alt="dropdown" width='22px' className={`firstName__icon ${isMenuOpenFirstName ? 'firstName__icon--rotated' : ''
                }`} onClick={toggleMenuFirstName} />
            <div className={`firstName__menu ${isMenuOpenFirstName ? 'firstName__menu--visible' : ''
                }`}>
                <div className="search">
                    <input type="search" placeholder="FirstName..." className='search__input' onChange={(e) => setFirstName(e.target.value)} />
                    <div className="search__btn"><img src={searchIcon} alt="search" width='14px' onClick={() => searchByFirstName(firstName)} /></div>
                </div >
                <Sorting sortValue={sortValue} nameSort={"firstName"} setMenuOpen={setIsMenuOpenFirstName} setUsers={setUsers} setLimit={setLimit} setTotalUsers={setTotalUsers} />
            </div>
        </div>
    )
}