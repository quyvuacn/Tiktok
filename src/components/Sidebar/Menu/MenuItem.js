import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function MenuItem({ title, icon, to }) {
    return (
        <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to}>
            {icon}
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

export default MenuItem;
