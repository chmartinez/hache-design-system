import React, { useState } from 'react';
import styled from 'styled-components';
import { color } from '../../style';

const defaultProps = {
    backgroundColor: color.BLUE,
    borderColor: color.RED,
    color: color.WHITE,
};

const Container = styled.div`
    background-color: ${props => props.backgroundColor || defaultProps.backgroundColor};
    border-color: ${props => props.borderColor || defaultProps.borderColor};
    border-radius: .375rem;
    border: 1px solid transparent;
    color: ${props => props.color || defaultProps.color};
    margin-bottom: 1.5rem;
    padding: .75rem 1.25rem;
    position: relative;
`;

const Dismiss = styled.button`
    color: ${color.BLACK};
    padding: 0.75rem;
    position: relative;
`;

const Alert = ({ dismissable = false, message, ...props }) => {
    const [dismissed, setDismiss] = useState(false);
    const dismissAlert = () => setDismiss(true);
    if (dismissed) return null;

    return <Container {...props}>
        <p>{message}</p>
        {dismissable && <Dismiss onClick={dismissAlert} data-testid="dismiss-button" />}
    </Container>;
};

export default Alert;