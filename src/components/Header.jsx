import infoIcon from '@/assets/images/info.svg';

export const Header = () => {
    return (
        <header>
            <div className="header__logo">
                Movable Table
            </div>

            <div className="__block"></div>
            <div className="header__info">
                <img src={infoIcon} alt="info" width='24px' />
            </div>
        </header>
    )
}