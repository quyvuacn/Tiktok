import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faEarthAsia,
    faQuestionCircle,
    faKeyboard,
    faCloudArrowUp,
    faUser,
    faCoins,
    faGear,
    faSignOut,
    faPaperPlane,
    faMessage,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';

import clsx from 'classnames/bind';
import images from '~/assets/images';
import styles from './Header.module.scss';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import SearchHeader from './SearchHeader';
import { Link } from 'react-router-dom';
import routesConfig from '~/utils/config/routes';

const cx = clsx.bind(styles);
const MENU_ITEM = [
    {
        icon: faEarthAsia,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vn',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: faQuestionCircle,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: faKeyboard,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;
    const userMenu = [
        {
            title: 'View Profile',
            icon: faUser,
            to: '/@username',
        },
        {
            title: 'Get coins',
            icon: faCoins,
            to: '/coin',
        },
        {
            title: 'Settings',
            icon: faGear,
            to: '/settings',
        },
    ];
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                console.log(menuItem);
                break;
            default:
                console.log('error: unknown menu');
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link className={cx('logo-link')} to={routesConfig.home}>
                        <img src={images.logo} alt="Tiktok" />
                    </Link>
                </div>
                <SearchHeader />

                {currentUser ? (
                    <div className={cx('actions')}>
                        <Tippy content="Upload video" placement="bottom" delay={[0, 250]}>
                            <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faCloudArrowUp} />
                            </button>
                        </Tippy>
                        <Tippy content="Message" placement="bottom" delay={[0, 250]}>
                            <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faPaperPlane} />
                            </button>
                        </Tippy>
                        <Tippy content="Inbox" placement="bottom" delay={[0, 250]}>
                            <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faMessage} />
                                <span className={cx('qty-inbox')}>14</span>
                            </button>
                        </Tippy>

                        <Menu
                            items={[...userMenu, ...MENU_ITEM, { title: 'Logout', icon: faSignOut, hr: true }]}
                            onChange={handleMenuChange}
                        >
                            <Image
                                className={cx('avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/1904b2d6558ed12ce5553d1f3e7752fb~c5_100x100.jpeg?x-expires=1668171600&x-signature=F%2BTDZqbiABIGGhepq32XutLkuhM%3D"
                                alt="avatar"
                            />
                        </Menu>
                    </div>
                ) : (
                    <div className={cx('actions')}>
                        <Button text>Upload</Button>
                        <Button primary>Login</Button>
                        <Menu items={MENU_ITEM} onChange={handleMenuChange}>
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        </Menu>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;
