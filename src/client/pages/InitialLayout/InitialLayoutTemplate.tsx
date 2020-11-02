import React from 'react';

import {SvgIcon} from "../../../UI/SvgIcon";
import {SpriteId} from "../../../UI/SvgIcon/SvgIconTemplate";
import fay from './assets/faySmall.png';
import './InitialLayout.scss'


export function InitialLayoutTemplate() {
    const ROOT_CLASS = 'initial-layout'

    return (
        <div className={ROOT_CLASS}>
            <img alt={'fay'} src={fay} className={`${ROOT_CLASS}__fay`} />
            <div className={`${ROOT_CLASS}__interactive-block`}>
                <SvgIcon className={`${ROOT_CLASS}__message`} spriteId={SpriteId.helloMessage} />
                <div className={`${ROOT_CLASS}__buttons-wrapper`}>
                    <div className={`${ROOT_CLASS}__button-yes`} />
                    <div className={`${ROOT_CLASS}__button-no`} />
                </div>
            </div>
        </div>
    );
}
