import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '../Image';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`}>
            <div className={cx('wrapper')}>
                <Image className={cx('avatar')} src={data.avatar} alt="avatar" />
                <div className={cx('info')}>
                    <p className={cx('name')}>
                        <span>{data.full_name}</span>
                        {data.tick && <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />}
                    </p>
                    <span className={cx('username')}>{data.nickname}</span>
                </div>
            </div>
        </Link>
    );
}

export default AccountItem;
