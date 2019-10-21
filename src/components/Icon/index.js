import React from 'react';
import styled from 'styled-components';
import { size } from 'style';

import InternalIcon from './icons-supported';

const StyledIcon = styled.i`
    display: inline-block;
    height: ${size.icon.normal};
    width: ${size.icon.normal};
    font-size: ${size.icon.normal};
`;

// TODO: add test and refactor this s***!
const Icon = ({style, ...props}) => (<StyledIcon style={style}><InternalIcon width={'1em'} height={'1em'} {...props} /></StyledIcon>);

export default Icon;
