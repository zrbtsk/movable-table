import { Age } from "../features/Age/Age"
import { FirstName } from "../features/FirstName/FirstName"
import { Gender } from "../features/Gender/Gender"
import { LastName } from "../features/LastName/LastName"
import { MaidenName } from "../features/MaidenName/MaidenName"
import { Phone } from "../features/Phone/Phone"

import { useResizing } from "../features/Resizing/use-resizing"

export const HeaderTable = ({ sortValue, setUsers, setLimit, setTotalUsers }) => {
    const { columnWidths, startResizing } = useResizing();

    return (
        <thead>
            <tr>
                <th style={{ width: `${columnWidths.firstName}px`, position: 'relative' }}>
                    <FirstName sortValue={sortValue} setUsers={setUsers} setLimit={setLimit} setTotalUsers={setTotalUsers} />
                    <div
                        className="resize-handle"
                        onMouseDown={(e) => startResizing('firstName', e)}
                    />
                </th>
                <th style={{ width: `${columnWidths.lastName}px`, position: 'relative' }}>
                    <LastName sortValue={sortValue} setUsers={setUsers} setLimit={setLimit} setTotalUsers={setTotalUsers} />
                    <div
                        className="resize-handle"
                        onMouseDown={(e) => startResizing('lastName', e)}
                    />
                </th>
                <th style={{ width: `${columnWidths.maidenName}px`, position: 'relative' }}>
                    <MaidenName sortValue={sortValue} setUsers={setUsers} setLimit={setLimit} setTotalUsers={setTotalUsers} />
                    <div
                        className="resize-handle"
                        onMouseDown={(e) => startResizing('maidenName', e)}
                    />
                </th>
                <th style={{ width: `${columnWidths.age}px`, position: 'relative' }}>
                    <Age sortValue={sortValue} setUsers={setUsers} setLimit={setLimit} setTotalUsers={setTotalUsers} />
                    <div
                        className="resize-handle"
                        onMouseDown={(e) => startResizing('age', e)}
                    />
                </th>
                <th style={{ width: `${columnWidths.gender}px`, position: 'relative' }}>
                    <Gender sortValue={sortValue} setUsers={setUsers} setLimit={setLimit} setTotalUsers={setTotalUsers} />
                    <div
                        className="resize-handle"
                        onMouseDown={(e) => startResizing('gender', e)}
                    />
                </th>
                <th style={{ width: `${columnWidths.phone}px`, position: 'relative' }}>
                    <Phone sortValue={sortValue} setUsers={setUsers} setLimit={setLimit} setTotalUsers={setTotalUsers} />
                    <div
                        className="resize-handle"
                        onMouseDown={(e) => startResizing('phone', e)}
                    />
                </th>

                <th style={{ width: `${columnWidths.email}px`, position: 'relative' }}>
                    Email
                    <div
                        className="resize-handle"
                        onMouseDown={(e) => startResizing('email', e)}
                    />
                </th>
                <th style={{ width: `${columnWidths.country}px`, position: 'relative' }}>
                    Country
                    <div
                        className="resize-handle"
                        onMouseDown={(e) => startResizing('country', e)}
                    />
                </th>
                <th style={{ width: `${columnWidths.city}px`, position: 'relative' }}>
                    City
                </th>
            </tr>
        </thead>
    )
}