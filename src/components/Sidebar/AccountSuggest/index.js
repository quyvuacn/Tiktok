import styles from './AccountSuggest.module.scss';
import classNames from 'classnames/bind';
import AccountSidebarItem from './AccountSidebarItem';
import { useState } from 'react';
import * as request from '~/utils/request';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function AccountSuggest({ title, showMore = false, showAll = false }) {
    const [_showMore, setShowMore] = useState(true);
    const [accounts, setAccount] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            const res = await request.get('users/search', {
                params: {
                    q: 'h',
                    type: 'more',
                },
            });
            setAccount(res.data);
        };

        fetchAPI();
    }, [_showMore]);

    return (
        <div className={cx('suggest-account')}>
            <p className={cx('suggest-title')}>{title}</p>
            <div>
                {accounts.map((account) => {
                    return <AccountSidebarItem key={account.id} data={account} />;
                })}
            </div>
            {showAll && (
                <button
                    onClick={() => {
                        setShowMore(!_showMore);
                    }}
                    className={cx('see-more')}
                >
                    {_showMore ? 'See all' : 'Hide'}
                </button>
            )}
            {showMore && (
                <button
                    onClick={() => {
                        setShowMore(!_showMore);
                    }}
                    className={cx('see-more')}
                >
                    {_showMore ? 'See more' : 'Hide'}
                </button>
            )}
        </div>
    );
}

export default AccountSuggest;
