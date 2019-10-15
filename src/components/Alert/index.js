import React, { useState } from 'react';
import styled from 'styled-components';
import { color, size } from '../../style';

const ALERT_VARIATIONS = {
    default: {
        background: color.BLUE,
        border: color.BLUE,
        dismissColor: color.WHITE,
        fontColor: color.WHITE,
    },
    error: {
        background: color.RED,
        border: color.RED,
        dismissColor: color.WHITE,
        fontColor: color.WHITE,
    },
    warning: {
        background: color.WARNING,
        border: color.WARNING,
        dismissColor: color.BLACK,
        fontColor: color.DARK_BLUE,
    },
};

const getCSSRulesForAlert = (variation) => ALERT_VARIATIONS[variation] || ALERT_VARIATIONS.default;

const Container = styled.div`
    /* Alert variation props */
    background-color: ${props => getCSSRulesForAlert(props.variation).background};
    border-color: ${props => getCSSRulesForAlert(props.variation).border};
    color: ${props => getCSSRulesForAlert(props.variation).fontColor};
    
    border-radius: ${size.radius};
    border: ${size.border} solid transparent;
    margin-bottom: ${size.margin.medium};
    padding: ${size.padding.small} ${size.padding.medium};
    position: relative;
`;

const Dismiss = styled.button`
    background: transparent;
    border: none;
    /* Prop drill issue */
    color: ${props => getCSSRulesForAlert(props.variation).dismissColor};
    cursor: pointer;
    opacity: 0.5;
    padding: ${size.padding.small};
    position: relative;

    &::after {
        /* might not work on older browsers. Structure is not explicit at component level */
        content: 'X';
        font-weight: 900;
    }
`;

const Alert = ({ dismissable = false, message, ...props }) => {
    const [dismissed, setDismiss] = useState(false);
    const dismissAlert = () => setDismiss(true);
    if (dismissed) return null;

    return <Container {...props} data-testid="alert">
        <p>{message}</p>
        {dismissable && <Dismiss {...props} onClick={dismissAlert} data-testid="dismiss-button" />}
    </Container>;
};

export default Alert;
