import React, { useState } from 'react';
import styled from 'styled-components';

const defaultProps = {
    backgroundColor: 'blue',
    borderColor: 'red',
    color: 'white'
};

const Styled = styled.div`
    position: relative;
    padding: .75rem 1.25rem;
    margin-bottom: 1.5rem;
    border: 1px solid transparent;
    border-radius: .375rem;

    color: ${props => props.color || defaultProps.color};
    background-color: ${props => props.backgroundColor || defaultProps.backgroundColor};
    border-color: ${props => props.borderColor || defaultProps.borderColor};
`;

const Dismiss = styled.button`
    position: relative;
    padding: 0.75rem;
    color: 'black';
`;

const Alert = ({ dismissable = false, message, ...props }) => {
    const [dismissed, setDismiss] = useState(false);
    const dismissAlert = () => setDismiss(true);
    return (
        <React.Fragment>
            {!dismissed && <Styled {...props}>
                <p>{message}</p>
                {dismissable && <Dismiss onClick={dismissAlert} data-testid="dismiss-button" />}
            </Styled>}
        </React.Fragment>
    );
};

export default Alert;