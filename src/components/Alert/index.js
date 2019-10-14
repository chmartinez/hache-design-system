import React, { useState } from 'react';
import styled from 'styled-components';
import { color, size } from '../../style';

const defaultProps = {
    backgroundColor: color.BLUE,
    borderColor: color.RED,
    color: color.WHITE,
};

const Container = styled.div`
    background-color: ${props => props.backgroundColor || defaultProps.backgroundColor};
    border-color: ${props => props.borderColor || defaultProps.borderColor};
    border-radius: ${size.radius};
    border: ${size.border} solid transparent;
    color: ${props => props.color || defaultProps.color};
    margin-bottom: ${size.margin.medium};
    padding: ${size.padding.small} ${size.padding.medium};
    position: relative;
`;

const Dismiss = styled.button`
    color: ${color.BLACK};
    padding: ${size.padding.small};
    position: relative;
`;

const Alert = ({ dismissable = false, message, ...props }) => {
    const [dismissed, setDismiss] = useState(false);
    const dismissAlert = () => setDismiss(true);
    if (dismissed) return null;

    return <Container {...props} data-testid="alert">
        <p>{message}</p>
        {dismissable && <Dismiss onClick={dismissAlert} data-testid="dismiss-button" />}
    </Container>;
};

export default Alert;
