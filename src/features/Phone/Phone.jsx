import { Sorting } from "../Sorting/Sorting"
import { usePhone } from "./use-phone"

import dropdownIcon from '@/assets/images/dropdown.svg';

export const Phone = ({ sortValue, setUsers, setLimit, setTotalUsers }) => {
    const { phoneRef, handleKeyDownPhone, isMenuOpenPhone, toggleMenuPhone, setIsMenuOpenPhone } = usePhone()

    return (
        <div className="phone" ref={phoneRef}
            onKeyDown={handleKeyDownPhone}>
            Phone
            <img src={dropdownIcon} alt="dropdown" width='22px' className={`phone__icon ${isMenuOpenPhone ? 'phone__icon--rotated' : ''
                }`} onClick={toggleMenuPhone} />
            <div className={`phone__menu ${isMenuOpenPhone ? 'phone__menu--visible' : ''
                }`}>
                <Sorting sortValue={sortValue} nameSort={"phone"} setMenuOpen={setIsMenuOpenPhone} setUsers={setUsers} setLimit={setLimit} setTotalUsers={setTotalUsers} />
            </div>
        </div>
    )
}