import classNames from 'classnames/bind';
import styles from './Discover.module.scss';
import Hashtag from './Hashtag';

const cx = classNames.bind(styles);

function Discover() {
    return (
        <div className={cx('discover')}>
            <p className={cx('discover-title')}>Discover</p>
            <div className={cx('hashtags')}>
                <Hashtag tag="suthatla" />
                <Hashtag tag="macedoi" />
                <Hashtag tag="sansangthaydoi" />
                <Hashtag tag="suthatla" />
                <Hashtag tag="suthatla" />
                <Hashtag tag="suthatla" />
                <Hashtag tag="suthatla" />
            </div>
        </div>
    );
}

export default Discover;
