import classNames from 'classnames/bind';
import config from '~/config';
import { HomeIcon, LiveIcon, UserIcon } from '../Icon';
import AccountSuggest from './AccountSuggest';
import Discover from './Discover';
import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem className="active" title="For Your" to={config.routes.home} icon={<HomeIcon />} />
                <MenuItem title="Following" to={config.routes.following} icon={<UserIcon />} />
                <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} />
            </Menu>

            <AccountSuggest title={'Recommended account'} showAll />
            <AccountSuggest title={'Following accounts'} showMore />
            <Discover />
        </aside>
    );
}

export default Sidebar;
