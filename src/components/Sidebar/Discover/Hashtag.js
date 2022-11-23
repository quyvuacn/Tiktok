import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Tag } from '~/components/Icon';
import styles from './Discover.module.scss';

const cx = classNames.bind(styles);

function Hashtag({ tag }) {
    return (
        <Link to={`/tag/${tag}`} className={cx('tag')}>
            <Tag />
            <span>{tag}</span>
        </Link>
    );
}

export default Hashtag;
