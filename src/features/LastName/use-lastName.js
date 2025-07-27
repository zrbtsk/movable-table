import { useEffect, useRef, useState } from "react";
import { getFilterByLastName, getAllUsers } from "../../api";

export const useLastName = (setUsers, setLimit, setTotalUsers, sortValue) => {
    const lastNameRef = useRef(null);
    const [isMenuOpenLastName, setIsMenuOpenLastName] = useState(false);
    const [lastName, setLastName] = useState('');

    const toggleMenuLastName = (e) => {
        e.stopPropagation();
        setIsMenuOpenLastName(!isMenuOpenLastName);
    };

    useEffect(() => {
        const handleClickOutsideLastName = (event) => {
            if (
                lastNameRef.current &&
                !lastNameRef.current.contains(event.target)
            ) {
                setIsMenuOpenLastName(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutsideLastName);
        return () =>
            document.removeEventListener('mousedown', handleClickOutsideLastName);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleKeyDownLastName = (e) => {
        Object.keys(sortValue).forEach(key => {
            sortValue[key].sort = 'noSort';
        })

        if (e.key === 'Enter' && lastNameRef) {
            if (lastName.length === 0) {
                getAllUsers(0).then((data) => {
                    setUsers(data.users)
                    setLimit(data.limit);
                    setTotalUsers(data.total)
                })
            } else {
                const name = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
                getFilterByLastName(name).then((data) => {
                    setUsers(data.users)
                    setLimit(data.limit);
                    setTotalUsers(data.total)
                })
            }
            setIsMenuOpenLastName(false);
        }
    };
    const searchByLastName = (lastName) => {
        Object.keys(sortValue).forEach(key => {
            sortValue[key].sort = 'noSort';
        })

        if (lastName.length === 0) {
            getAllUsers(0).then((data) => {
                setUsers(data.users)
                setLimit(data.limit);
                setTotalUsers(data.total)
            })
        } else {
            const name = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
            getFilterByLastName(name).then((data) => {
                setUsers(data.users)
                setLimit(data.limit);
                setTotalUsers(data.total)
            })
        }
        setIsMenuOpenLastName(false);
    }


    return { lastNameRef, handleKeyDownLastName, isMenuOpenLastName, toggleMenuLastName, setLastName, searchByLastName, lastName, setIsMenuOpenLastName };
}