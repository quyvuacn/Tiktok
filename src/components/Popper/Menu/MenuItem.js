import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    console.log(data);
    return (
        <>
            {data.hr === true && <hr className={cx('separate')} />}

            <Button className={cx('menu-item')} to={data.to} onClick={onClick}>
                {data.icon && <FontAwesomeIcon className={cx('icon')} icon={data.icon} />}
                {data.title}
            </Button>
        </>
    );
}

export default MenuItem;
