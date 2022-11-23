import styles from './AccountSuggest.module.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '~/components/Image';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountSidebarItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`}>
            <div className={cx('wrapper')}>
                <Image className={cx('avatar')} src={data.avatar} alt="avatar" />
                <div className={cx('info')}>
                    <p className={cx('name')}>
                        {data.full_name}
                        {data.tick && <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />}
                    </p>
                    <span className={cx('username')}>{data.nickname}</span>
                </div>
            </div>
        </Link>
    );
}

export default AccountSidebarItem;
