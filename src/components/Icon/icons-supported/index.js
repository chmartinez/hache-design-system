import React from 'react';
import { ReactComponent as Close } from './close.svg';
import { ReactComponent as Down } from './down.svg';
import { ReactComponent as Up } from './up.svg';

const InternalIcon = (props) => {
    switch (props.type) {
        case 'close':
            return <Close {...props} />;
        case 'down':
            return <Down {...props} />;
        case 'up':
            return <Up {...props} />;
        default:
            return;
    }
};

export default InternalIcon;
