import { useEffect, useState } from "react";
import { getAllUsers, getFilterByGender, getSortingUsers } from "../../api";

export const usePagination = (setUsers, sortValue) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(0);
    const [totalUsers, setTotalUsers] = useState(null)

    const paginate = (pageNumbers) => setCurrentPage(pageNumbers);


    useEffect(() => {
        const hasAscSort = Object.values(sortValue).some(item => item.sort !== 'noSort') || false;
        const skipUsers = limit * (currentPage - 1);

        if (hasAscSort === true) {
            const nameKey = Object.keys(sortValue).find(key => sortValue[key].sort !== 'noSort');
            const sort = sortValue[nameKey].sort;
            nameKey === 'gender' ?
                getFilterByGender(sort, skipUsers).then((data) => {
                    setUsers(data.users)
                    setLimit(data.limit);
                    setTotalUsers(data.total);
                }) :
                getSortingUsers(nameKey, sort, skipUsers).then((data) => {
                    setUsers(data.users)
                    setLimit(data.limit);
                    setTotalUsers(data.total);
                });
        } else {
            getAllUsers(skipUsers).then((data) => {
                setUsers(data.users);
                setLimit(data.limit);
                setTotalUsers(data.total);
            })
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage])

    return { setLimit, setTotalUsers, totalUsers, paginate, currentPage };
}