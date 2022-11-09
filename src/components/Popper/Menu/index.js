import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';
import { Wrapper as PopperWraper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const renderItem = () => items.map((item, index) => <MenuItem key={index} data={item} />);

    return (
        <Tippy
            interactive
            placement="bottom-end"
            delay={[0, 250]}
            render={(attrs) => (
                <div className={cx('menu-list')} {...attrs}>
                    <PopperWraper className={cx('menu-popper')}>
                        <div>{renderItem()}</div>
                    </PopperWraper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
