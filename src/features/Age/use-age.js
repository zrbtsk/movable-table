import { useEffect, useRef, useState } from "react";
import { getAllUsers, getFilterByAge } from "../../api";

export const useAge = (setUsers, sortValue, setLimit, setTotalUsers) => {
    const ageRef = useRef(null);

    const [isMenuOpenAge, setIsMenuOpenAge] = useState(false);
    const [age, setAge] = useState('');

    // открытие/ закрытие dropdown по кнопке
    const toggleMenuAge = (e) => {
        e.stopPropagation();
        setIsMenuOpenAge(!isMenuOpenAge);
    };

    // открытие/ закрытие dropdown при клике вне
    useEffect(() => {
        const handleClickOutsideAge = (event) => {
            if (
                ageRef.current &&
                !ageRef.current.contains(event.target)
            ) {
                setIsMenuOpenAge(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutsideAge);
        return () =>
            document.removeEventListener('mousedown', handleClickOutsideAge);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const handleKeyDownAge = (e) => {
        Object.keys(sortValue).forEach(key => {
            sortValue[key].sort = 'noSort';
        })
        if (e.key === 'Enter' && ageRef) {
            if (age.length === 0) {
                getAllUsers(0).then((data) => {
                    setUsers(data.users)
                    setLimit(data.limit);
                    setTotalUsers(data.total);
                })
            } else {
                const name = age.charAt(0).toUpperCase() + age.slice(1).toLowerCase();
                getFilterByAge(name).then((data) => {
                    setUsers(data.users)
                    setLimit(data.limit);
                    setTotalUsers(data.total);
                })
            }
            setIsMenuOpenAge(false);
        }
    };

    const searchByAge = (age) => {
        Object.keys(sortValue).forEach(key => {
            sortValue[key].sort = 'noSort';
        })
        if (age.length === 0) {
            getAllUsers(0).then((data) => {
                setUsers(data.users)
                setLimit(data.limit);
                setTotalUsers(data.total);
            })
        } else {
            const ageToFetch = age.charAt(0).toUpperCase() + age.slice(1).toLowerCase();
            getFilterByAge(ageToFetch).then((data) => {
                setUsers(data.users)
                setLimit(data.limit);
                setTotalUsers(data.total);
            })
        }
        setIsMenuOpenAge(false);
    }

    return { setAge, toggleMenuAge, handleKeyDownAge, ageRef, isMenuOpenAge, searchByAge, age, setIsMenuOpenAge };
}