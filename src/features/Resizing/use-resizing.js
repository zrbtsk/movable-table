import { useEffect, useRef, useState } from "react";

export const useResizing = () => {
    const [isResizing, setIsResizing] = useState(false);
    const [activeColumn, setActiveColumn] = useState(null);
    const [startX, setStartX] = useState(0);
    const [startWidth, setStartWidth] = useState(0);
    const [columnWidths, setColumnWidths] = useState({
        firstName: 150,
        lastName: 150,
        maidenName: 160,
        age: 100,
        gender: 100,
        phone: 180,
        email: 200,
        country: 150,
        city: 150
    });

    const tableRef = useRef(null);


    const startResizing = (columnName, e) => {
        setIsResizing(true);
        setActiveColumn(columnName);
        setStartX(e.clientX);
        setStartWidth(columnWidths[columnName]);
        document.body.style.cursor = 'col-resize';
        document.addEventListener('mousemove', resizeColumn);
        document.addEventListener('mouseup', stopResizing);
    };
    const resizeColumn = (e) => {
        if (!isResizing) return;

        const newWidth = startWidth + (e.clientX - startX);
        const minWidth = 50;

        if (newWidth >= minWidth) {
            setColumnWidths(prev => ({
                ...prev,
                [activeColumn]: newWidth
            }));
        }
    };

    const stopResizing = () => {
        setIsResizing(false);
        document.body.style.cursor = '';
        document.removeEventListener('mousemove', resizeColumn);
        document.removeEventListener('mouseup', stopResizing);
    };
    useEffect(() => {
        return () => {
            document.removeEventListener('mousemove', resizeColumn);
            document.removeEventListener('mouseup', stopResizing);
        };
// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isResizing]);

    return { tableRef, columnWidths, startResizing };
}