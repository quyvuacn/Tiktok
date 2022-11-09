import classNames from 'classnames';
import { forwardRef } from 'react';
import styles from './Image.module.scss';

const Image = ({ src, alt, className, ...props }, ref) => {
    // eslint-disable-next-line
    return (
        <img
            className={classNames(styles['wrapper'], className)}
            ref={ref}
            src={src}
            alt={alt}
            {...props}
            onError={() => {}}
        />
    );
};

export default forwardRef(Image);
