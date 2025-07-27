import { RowTable } from "./RowTable"

export const BodyTable = ({ users }) => {

    return (
        <>
            {users.length === 0 && (
                <tbody>
                    <tr className="notFoundUsers">
                        <td colSpan="100%">No users found</td>
                    </tr>
                </tbody>
            )}
            {users.length > 0 && (
                <tbody>
                    {users.length > 0 && users.map((user) => (
                        <RowTable key={user.id} user={user} />
                    )
                    )}
                </tbody>)}
        </>

    )
}