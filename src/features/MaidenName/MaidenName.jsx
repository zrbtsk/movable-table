import { Sorting } from "../Sorting/Sorting"
import { useMaidenName } from "./use-maidenName"

import dropdownIcon from '@/assets/images/dropdown.svg';
import searchIcon from '@/assets/images/search.svg';

export const MaidenName = ({ sortValue, setUsers, setLimit, setTotalUsers }) => {
    const { maidenName, maidenNameRef, handleKeyDownMaidenName, isMenuOpenMaidenName, searchByMaidenName, setMaidenName, toggleMenuMaidenName, setIsMenuOpenMaidenName } = useMaidenName(setUsers, setLimit, setTotalUsers, sortValue)

    return (
        <div className="maidenName" ref={maidenNameRef}
            onKeyDown={handleKeyDownMaidenName}  >
            MaidenName
            <img src={dropdownIcon} alt="dropdown" width='22px' className={`maidenName__icon ${isMenuOpenMaidenName ? 'maidenName__icon--rotated' : ''
                }`} onClick={toggleMenuMaidenName} />
            <div className={`maidenName__menu ${isMenuOpenMaidenName ? 'maidenName__menu--visible' : ''
                }`}>
                <div className="search">
                    <input type="search" placeholder="MaidenName..." className='search__input' onChange={(e) => setMaidenName(e.target.value)} />
                    <div className="search__btn"><img src={searchIcon} alt="search" width='14px' onClick={() => searchByMaidenName(maidenName)} /></div>
                </div >
                <Sorting sortValue={sortValue} nameSort={"maidenName"} setMenuOpen={setIsMenuOpenMaidenName} setUsers={setUsers} setLimit={setLimit} setTotalUsers={setTotalUsers} />
            </div>
        </div>
    )
}