import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';
import 'tippy.js/dist/tippy.css';
import { Wrapper as PopperWraper } from '~/components/Popper';
import Header from './Header';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ children, items = [], onChange }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    const renderItem = () =>
        current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });

    return (
        <Tippy
            offset={[12, 8]}
            interactive
            placement="bottom-end"
            delay={[0, 250]}
            onHidden={() => setHistory((pre) => pre.slice(0, 1))}
            render={(attrs) => (
                <div className={cx('menu-list')} {...attrs}>
                    <PopperWraper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                title="Language"
                                onBack={() => {
                                    setHistory((pre) => pre.slice(0, history.length - 1));
                                }}
                            />
                        )}
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
