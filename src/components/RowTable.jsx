import { useRef } from "react";
import { createPortal } from "react-dom";

import { ModalBox } from "./ModalBox"
import { useResizing } from "../features/Resizing/use-resizing";

export const RowTable = ({ user }) => {
    const modalRef = useRef(null);
    const { columnWidths } = useResizing();

    const openModal = () => {
        if (modalRef.current) {
            modalRef.current.style.display = 'block';
        }
    }

    return (
        <>
            <tr onClick={() => openModal()}>
                <td style={{ width: `${columnWidths.firstName}px` }}>
                    {user.firstName ? user.firstName : '-'}
                </td>
                <td style={{ width: `${columnWidths.lastName}px` }}>
                    {user.lastName ? user.lastName : '-'}
                </td>
                <td style={{ width: `${columnWidths.maidenName}px` }}>
                    {user.maidenName ? user.maidenName : '-'}
                </td>
                <td style={{ width: `${columnWidths.age}px` }}>
                    {user.age ? user.age : '-'}
                </td>
                <td style={{ width: `${columnWidths.gender}px` }}>
                    {user.gender ? user.gender : '-'}
                </td>
                <td style={{ width: `${columnWidths.phone}px` }}>
                    {user.phone ? user.phone : '-'}
                </td>
                <td style={{ width: `${columnWidths.email}px` }}>
                    {user.email ? user.email : '-'}
                </td>
                <td style={{ width: `${columnWidths.country}px` }}>
                    {user.address.country ? user.address.country : '-'}
                </td>
                <td style={{ width: `${columnWidths.city}px` }}>
                    {user.address.city ? user.address.city : '-'}
                </td>
            </tr>
            {createPortal(
                <ModalBox user={user} modalRef={modalRef} />,
                document.body
            )}
        </>
    )
}