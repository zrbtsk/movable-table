import { useState } from 'react';

import { HeaderTable } from './HeaderTable'
import { BodyTable } from './BodyTable';
import { Pagination } from '../features/Pagination/Pagination';

import { usePagination } from '../features/Pagination/use-pagination';
import { useResizing } from '../features/Resizing/use-resizing';

const sortValue = {
    firstName: { name: 'firstName', sort: 'noSort', id: '1' },
    lastName: { name: 'lastName', sort: 'noSort', id: '2' },
    maidenName: { name: 'maidenName', sort: 'noSort', id: '3' },
    age: { name: 'age', sort: 'noSort', id: '4' },
    gender: { name: 'gender', sort: 'noSort' },
    phone: { name: 'phone', sort: 'noSort', id: '5' },
}

export const Table = () => {
    const [users, setUsers] = useState([]);
    const { tableRef } = useResizing();
    const { totalUsers, paginate, setLimit, setTotalUsers, currentPage } = usePagination(setUsers, sortValue)

    return (
        <>
            <table ref={tableRef}>
                <HeaderTable sortValue={sortValue} setUsers={setUsers} setLimit={setLimit} setTotalUsers={setTotalUsers} />
                <BodyTable users={users} />
            </table>
            <Pagination totalUsers={totalUsers} paginate={paginate} currentPage={currentPage} />
        </>
    )
}