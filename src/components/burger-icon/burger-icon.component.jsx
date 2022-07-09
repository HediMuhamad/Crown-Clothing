import "./burger-icon.styles.scss"
import { ReactComponent as TheBurger } from '../../assets/icons/burger-icon.svg';

const BurgerIcon = ({clickHandler}) => {
    return (
        <div className='burger-icon'>
            <TheBurger className='the-burger' onClick={clickHandler}/>
        </div>
    )
}

export default BurgerIcon;