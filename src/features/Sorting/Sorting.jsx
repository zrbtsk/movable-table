import { useSorting } from "./use-sorting"

export const Sorting = ({ sortValue, nameSort, setMenuOpen, setUsers, setLimit, setTotalUsers }) => {
    const { handleSorting } = useSorting(sortValue, setUsers, setLimit, setTotalUsers)

    return (
        <div className='sort'>
            <input
                type="radio"
                name='sort'
                value={nameSort === 'gender' ? 'male' : "asc"}
                id={nameSort === 'gender' ? 'male' : `asc-${sortValue[nameSort].id}`}
                className='sort__input'
                onChange={(e) => {
                    handleSorting(e, nameSort)
                    setMenuOpen(false)
                }}
                checked={nameSort === 'gender' ? sortValue[nameSort].sort === 'male' : sortValue[nameSort].sort === 'asc'}
            />
            <label
                htmlFor={nameSort === 'gender' ? 'male' : `asc-${sortValue[nameSort].id}`}
            >Sort Ascending</label>
            <input
                type="radio"
                name='sort'
                value={nameSort === 'gender' ? 'female' : "desc"}
                id={nameSort === 'gender' ? 'female' : `desc-${sortValue[nameSort].id}`}
                className='sort__input'
                onChange={(e) => {
                    handleSorting(e, nameSort)
                    setMenuOpen(false)
                }}
                checked={nameSort === 'gender' ? sortValue[nameSort].sort === 'female' : sortValue[nameSort].sort === 'desc'}
            />
            <label
                htmlFor={nameSort === 'gender' ? 'female' : `desc-${sortValue[nameSort].id}`}
            >Sort Descending</label>
            <input
                type="radio"
                name='sort'
                value="noSort"
                id={`noSort-${sortValue[nameSort].id}`}
                className='sort__input'
                onChange={(e) => {
                    handleSorting(e, nameSort)
                    setMenuOpen(false)
                }}
                checked={sortValue[nameSort].sort === 'noSort'} />
            <label
                htmlFor={`noSort-${sortValue[nameSort].id}`} >Clear sort</label>
        </div>
    )
}