import React from 'react';
import classnames from 'classnames';

import sprite from '../../client/images/sprite.svg';
import './SvgIcon.scss';

export enum SpriteId {
    helloMessage= 'helloMessage'
}

interface Props {
    spriteId: SpriteId
    className?: string
    onClick?(): void
}

export function SvgIconTemplate({ spriteId, className, onClick }: Props): JSX.Element {
    const ROOT_CLASS = 'svg-icon';
    const iconClassName = classnames(
        ROOT_CLASS,
        {
            [`${className}`]: Boolean(className),
        }
    );

    return (
        <svg className={iconClassName} onClick={onClick}>
            <use
                xlinkHref={`${sprite}#${spriteId}`}
            />
        </svg>
    );
}
