import { useEffect, useRef, useState } from "react";
import { getAllUsers, getFilterByMaidenName } from "../../api";

export const useMaidenName = (setUsers, setLimit, setTotalUsers, sortValue) => {
    const maidenNameRef = useRef(null);
    const [isMenuOpenMaidenName, setIsMenuOpenMaidenName] = useState(false);
    const [maidenName, setMaidenName] = useState('');

    const toggleMenuMaidenName = (e) => {
        e.stopPropagation();
        setIsMenuOpenMaidenName(!isMenuOpenMaidenName);
    };

    useEffect(() => {
        const handleClickOutsideMaidenName = (event) => {
            if (
                maidenNameRef.current &&
                !maidenNameRef.current.contains(event.target)
            ) {
                setIsMenuOpenMaidenName(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutsideMaidenName);
        return () =>
            document.removeEventListener('mousedown', handleClickOutsideMaidenName);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleKeyDownMaidenName = (e) => {
        Object.keys(sortValue).forEach(key => {
            sortValue[key].sort = 'noSort';
        })

        if (e.key === 'Enter' && maidenNameRef) {
            if (maidenName.length === 0) {
                getAllUsers(0).then((data) => {
                    setUsers(data.users)
                    setLimit(data.limit);
                    setTotalUsers(data.total)
                })
            } else {
                const name = maidenName.charAt(0).toUpperCase() + maidenName.slice(1).toLowerCase();
                getFilterByMaidenName(name).then((data) => {
                    setUsers(data.users)
                    setLimit(data.limit);
                    setTotalUsers(data.total)
                })
            }
            setIsMenuOpenMaidenName(false);
        }
    };
    const searchByMaidenName = (maidenName) => {
        Object.keys(sortValue).forEach(key => {
            sortValue[key].sort = 'noSort';
        })

        if (maidenName.length === 0) {
            getAllUsers(0).then((data) => {
                setUsers(data.users)
                setLimit(data.limit);
                setTotalUsers(data.total)
            })
        } else {
            const name = maidenName.charAt(0).toUpperCase() + maidenName.slice(1).toLowerCase();
            getFilterByMaidenName(name).then((data) => {
                setUsers(data.users)
                setLimit(data.limit);
                setTotalUsers(data.total)
            })
        }
        setIsMenuOpenMaidenName(false);
    }

    return { maidenName, maidenNameRef, handleKeyDownMaidenName, isMenuOpenMaidenName, searchByMaidenName, setMaidenName, toggleMenuMaidenName, setIsMenuOpenMaidenName };
}