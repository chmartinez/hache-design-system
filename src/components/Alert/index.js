import React from 'react';
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

const Alert = ({ message, ...props }) => (
    <Styled {...props}>
        <p>{message}</p>
    </Styled>
);

export default Alert;