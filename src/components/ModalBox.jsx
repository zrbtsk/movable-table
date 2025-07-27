
export const ModalBox = ({ user, modalRef }) => {

    const closeModal = () => {
        if (modalRef.current) {
            modalRef.current.style.display = 'none';
        }
    }

    return (
        <div className='modal' ref={modalRef}>
            <div className='modal__content'>
                <img src="./images/close.svg" alt="close" width='24px' className='modal__close' onClick={() => closeModal()} />
                <div className='modal__blank'>
                    <img src={user.image ? user.image : './images/user.png'} alt="close" width='200px' className='modal__blank__img' onClick={() => closeModal()} />
                    <span className="modal__blank__name--firstName">{user.firstName}</span>
                    <span className="modal__blank__name--lastName">{user.lastName}</span>
                    <span className="modal__blank__name--maidenName">{user.maidenName ? user.maidenName : ''}</span>
                    <h2 className="modal__blank__age--num">{user.age}</h2>
                    <h2 className="modal__blank__height--num">{user.height}</h2>
                    <h2 className="modal__blank__weight--num">{user.weight}</h2>
                    <p className="modal__blank__age">Age</p>
                    <p className="modal__blank__height">Height</p>
                    <p className="modal__blank__weight">Weight</p>
                    <span className="modal__blank__phone">Phone</span><span className="modal__blank__phone--num">{user.phone}</span>
                    <span className="modal__blank__email">Email</span><span className="modal__blank__email--text">{user.email}</span>
                    <span className="modal__blank__country">Country</span><span className="modal__blank__country--text">{user.address.country}</span>
                    <span className="modal__blank__state">State</span><span className="modal__blank__state--text">{user.address.state}</span>
                    <span className="modal__blank__city">City</span><span className="modal__blank__city--text">{user.address.city}</span>
                    <span className="modal__blank__address">Address</span><span className="modal__blank__address--text">{user.address.address}</span>
                </div>

            </div>
        </div>
    )
}