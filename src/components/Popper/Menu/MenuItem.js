import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    return (
        <Button className={cx('menu-item')}>
            <FontAwesomeIcon className={cx('icon')} icon={data.icon} />
            {data.title}
        </Button>
    );
}

export default MenuItem;
