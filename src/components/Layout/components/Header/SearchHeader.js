import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import clsx from 'classnames/bind';
import styles from './Header.module.scss';
import 'tippy.js/dist/tippy.css';

import { Wrapper as PopperWraper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { useEffect, useRef, useState } from 'react';
import { useDebounce } from '~/hooks';

const cx = clsx.bind(styles);
function SearchHeader() {
    const [searchResult, setSearchResult] = useState([]);
    const [search, setSearch] = useState('');
    const [showClear, setShowClear] = useState(false);
    const [showResult, setShowResult] = useState(true);

    const debounce = useDebounce(search, 600);
    const inputRef = useRef();

    useEffect(() => {
        if (!!debounce.trim()) {
            fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounce)}&type=less`)
                .then((res) => res.json())
                .then((res) => {
                    setSearchResult(res.data);
                    setShowClear(true);
                })
                .catch(() => {
                    console.log('error');
                });
        } else {
            setSearchResult([]);
        }
    }, [debounce]);

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <HeadlessTippy
            interactive
            visible={searchResult.length > 0 && showResult}
            render={(attrs) => (
                <div className={cx('search-result')} {...attrs}>
                    <PopperWraper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResult.map((account) => {
                            return <AccountItem key={account.id} data={account} />;
                        })}
                    </PopperWraper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                    onFocus={() => {
                        setShowResult(true);
                    }}
                    type="text"
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                />
                {!!search && (
                    <>
                        {showClear ? (
                            <button
                                className={cx('clear')}
                                onClick={() => {
                                    setSearch('');
                                    inputRef.current.focus();
                                }}
                            >
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                        ) : (
                            <button className={cx('clear')}>
                                <div className={cx('spinner')} />
                            </button>
                        )}
                    </>
                )}

                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default SearchHeader;