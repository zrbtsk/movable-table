import { getAllUsers, getFilterByGender, getSortingUsers } from "../../api";

export const useSorting = (sortValue, setUsers, setLimit, setTotalUsers) => {

    const handleSorting = (e, nameKey) => {
        Object.keys(sortValue).forEach(key => {
            sortValue[key].sort = 'noSort';
        })
        const sort = e.target.value;

        if (sort === "noSort") {
            getAllUsers(0).then((data) => {
                setUsers(data.users)
                setLimit(data.limit);
                setTotalUsers(data.total)
            })
        } else {
            nameKey === 'gender' ?
                getFilterByGender(sort, 0).then((data) => {
                    setUsers(data.users)
                    setLimit(data.limit);
                    setTotalUsers(data.total)
                }) :
                getSortingUsers(nameKey, sort, 0).then((data) => {
                    setUsers(data.users)
                    setLimit(data.limit);
                    setTotalUsers(data.total)
                });
        }
        sortValue[nameKey].sort = sort;
    }


    return { sortValue, handleSorting };
}