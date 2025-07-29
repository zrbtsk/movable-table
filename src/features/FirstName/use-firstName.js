import { useEffect, useRef, useState } from "react";
import { getFilterByFirstName, getAllUsers } from "../../api";

export const useFirstName = (setUsers, setLimit, setTotalUsers, sortValue) => {
    const firstNameRef = useRef(null);
    const [isMenuOpenFirstName, setIsMenuOpenFirstName] = useState(false);
    const [firstName, setFirstName] = useState('');

    // открытие/ закрытие dropdown по кнопке
    const toggleMenuFirstName = (e) => {
        e.stopPropagation();
        setIsMenuOpenFirstName(!isMenuOpenFirstName);
    };

    // открытие/ закрытие dropdown при клике вне
    useEffect(() => {
        const handleClickOutsideFirstName = (event) => {
            console.log(firstNameRef.current);
            if ( 
                firstNameRef.current &&
                !firstNameRef.current.contains(event.target)
            ) {
                setIsMenuOpenFirstName(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutsideFirstName);
        return () =>
            document.removeEventListener('mousedown', handleClickOutsideFirstName);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // поиск по firstName, обработка нажатия 'Enter'
    const handleKeyDownFirstName = (e) => {

        Object.keys(sortValue).forEach(key => {
            sortValue[key].sort = 'noSort';
        })

        if (e.key === 'Enter' && firstNameRef) {
            if (firstName.length === 0) {
                getAllUsers(0).then((data) => {
                    setUsers(data.users)
                    setLimit(data.limit);
                    setTotalUsers(data.total)
                })
            } else {
                const name = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
                getFilterByFirstName(name).then((data) => {
                    setUsers(data.users)
                    setLimit(data.limit);
                    setTotalUsers(data.total)
                })
            }
            setIsMenuOpenFirstName(false);
        }
    };

    // поиск по firstName, обработка нажатия кнопки
    const searchByFirstName = (firstName) => {
        Object.keys(sortValue).forEach(key => {
            sortValue[key].sort = 'noSort';
        })

        if (firstName.length === 0) {
            getAllUsers(0).then((data) => {
                setUsers(data.users)
                setLimit(data.limit);
                setTotalUsers(data.total)
            })
        } else {
            const name = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
            getFilterByFirstName(name).then((data) => {
                setUsers(data.users)
                setLimit(data.limit);
                setTotalUsers(data.total)
            })
        }
        setIsMenuOpenFirstName(false);
    }

    return { firstName, firstNameRef, handleKeyDownFirstName, isMenuOpenFirstName, toggleMenuFirstName, setFirstName, searchByFirstName, setIsMenuOpenFirstName };
}