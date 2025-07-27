import { useEffect, useRef, useState } from "react";

export const useGender = () => {
    const genderRef = useRef(null);
    const [isMenuOpenGender, setIsMenuOpenGender] = useState(false);

    const toggleMenuGender = (e) => {
        e.stopPropagation();
        setIsMenuOpenGender(!isMenuOpenGender);
    };

    useEffect(() => {
        const handleClickOutsideGender = (event) => {
            if (
                genderRef.current &&
                !genderRef.current.contains(event.target)
            ) {
                setIsMenuOpenGender(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutsideGender);
        return () =>
            document.removeEventListener('mousedown', handleClickOutsideGender);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleKeyDownGender = (e) => {
        if (e.key === 'Enter' && genderRef) {
            setIsMenuOpenGender(false);
        }
    };

    return { genderRef, handleKeyDownGender, isMenuOpenGender, toggleMenuGender, setIsMenuOpenGender };
}