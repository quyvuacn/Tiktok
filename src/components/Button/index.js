import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);
function Button({
    to,
    href,
    primary = false,
    text = false,
    rounded = false,
    outline = false,
    small = false,
    large = false,
    children,
    onClick,
    disabled = false,
    className,
    ...passProps
}) {
    let Comp = 'button';
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        text,
        rounded,
        outline,
        small,
        large,
        disabled,
    });
    const props = {
        onClick,
        ...passProps,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    if (disabled) {
        Object.keys(props).forEach((propKey) => {
            if (propKey.startswith('on') && typeof props[propKey] === 'function') {
                delete props[propKey];
            }
        });
    }

    return (
        <Comp className={classes} {...props}>
            {children}
        </Comp>
    );
}

export default Button;
