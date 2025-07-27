import { useEffect, useRef, useState } from "react";

export const usePhone = () => {
    const phoneRef = useRef(null);
    const [isMenuOpenPhone, setIsMenuOpenPhone] = useState(false);

    const toggleMenuPhone = (e) => {
        e.stopPropagation();
        setIsMenuOpenPhone(!isMenuOpenPhone);
    };

    useEffect(() => {
        const handleClickOutsidePhone = (event) => {
            if (
                phoneRef.current &&
                !phoneRef.current.contains(event.target)
            ) {
                setIsMenuOpenPhone(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutsidePhone);
        return () =>
            document.removeEventListener('mousedown', handleClickOutsidePhone);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleKeyDownPhone = (e) => {
        if (e.key === 'Enter' && phoneRef) {

            setIsMenuOpenPhone(false);
        }
    };

    return { phoneRef, handleKeyDownPhone, isMenuOpenPhone, toggleMenuPhone, setIsMenuOpenPhone };
}