import React from 'react';

import { ReactComponent as Fay } from "./assets/fay.svg";
import { ReactComponent as Background } from "./assets/background.svg";
import { ReactComponent as ButtonYes } from "./assets/yesButton.svg";
import { ReactComponent as ButtonNo } from "./assets/noButton.svg";
import { ReactComponent as Message } from "./assets/message.svg";
import './InitialLayout.scss'

export function InitialLayoutTemplate() {

    return (
        <svg
            width={1600}
            height={900}
            viewBox={"0 0 100% 100%"}
        >
            <Background />
            <ButtonYes y={300} x={600} width={175} />
            <ButtonNo y={300} x={800} width={175} />
            <Message  y={100} x={600} />
            <Fay height={800} x={-550} y={50} />
        </svg>
    );

}
