import { Sorting } from "../Sorting/Sorting"
import { useAge } from "./use-age"

export const Age = ({ sortValue, setUsers, setLimit, setTotalUsers }) => {

    const { setAge, toggleMenuAge, handleKeyDownAge, ageRef, isMenuOpenAge, searchByAge, age, setIsMenuOpenAge } = useAge(setUsers, sortValue, setLimit, setTotalUsers)

    return (
        <div className="age" ref={ageRef}
            onKeyDown={handleKeyDownAge}>
            Age
            <img src="./images/dropdown.svg" alt="dropdown" width='22px' className={`age__icon ${isMenuOpenAge ? 'age__icon--rotated' : ''
                }`} onClick={toggleMenuAge} />
            <div className={`age__menu ${isMenuOpenAge ? 'age__menu--visible' : ''
                }`}>
                <div className="search">
                    <input type="number" placeholder="Age..." min='22' className='search__input' onChange={(e) => setAge(e.target.value)} />
                    <div className="search__btn"><img src="./images/search.svg" alt="search" width='14px' onClick={() => searchByAge(age)} /></div>
                </div >
                <Sorting sortValue={sortValue} nameSort={"age"} setMenuOpen={setIsMenuOpenAge} setUsers={setUsers} setLimit={setLimit} setTotalUsers={setTotalUsers} />
            </div>
        </div>
    )
}