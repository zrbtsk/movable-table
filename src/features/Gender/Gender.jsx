import { Sorting } from "../Sorting/Sorting";
import { useGender } from "./use-gender";

import dropdownIcon from '@/assets/images/dropdown.svg';

export const Gender = ({ sortValue, setUsers, setLimit, setTotalUsers, columnWidths }) => {
    const { genderRef, handleKeyDownGender, isMenuOpenGender, toggleMenuGender, setIsMenuOpenGender } = useGender()

    return (
        <div className="gender" ref={genderRef}
            onKeyDown={handleKeyDownGender}>
                { columnWidths.gender < 70 ? '' : 'Gender' }
            <img src={dropdownIcon} alt="dropdown" width='22px' className={`gender__icon ${isMenuOpenGender ? 'gender__icon--rotated' : ''
                }`} onClick={toggleMenuGender} />
            <div className={`gender__menu ${isMenuOpenGender ? 'gender__menu--visible' : ''
                }`}>
                <Sorting sortValue={sortValue} nameSort={"gender"} setMenuOpen={setIsMenuOpenGender} setUsers={setUsers} setLimit={setLimit} setTotalUsers={setTotalUsers} />
            </div>
        </div>
    )
}