import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, size } from 'style';

const ALERT_VARIATIONS = {
    default: {
        background: colors.blue1,
        border: colors.blue3,
        dismissColor: colors.grey,
        fontColor: colors.black,
    },
    error: {
        background: colors.red1,
        border: colors.red3,
        dismissColor: colors.grey,
        fontColor: colors.black,
    },
    warning: {
        background: colors.yellow1,
        border: colors.yellow3,
        dismissColor: colors.grey,
        fontColor: colors.defaultFontColor,
    },
};

const getCSSRulesForAlert = (variation) => ALERT_VARIATIONS[variation] || ALERT_VARIATIONS.default;

const Container = styled.div`
    /* Alert variation props */
    background-color: ${props => getCSSRulesForAlert(props.variation).background};
    border: ${size.border} solid ${props => getCSSRulesForAlert(props.variation).border};
    color: ${props => getCSSRulesForAlert(props.variation).fontColor};
    
    border-radius: ${size.radius};
    display: flex;
    flex: 1;
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
    margin-left: auto;
    opacity: 0.5;
    padding: ${size.padding.small};
    position: relative;

    &:focus, &:hover {
        opacity: 0.75;
        outline: none;
    }

    &::after {
        /* might not work on older browsers. Structure is not explicit at component level */
        content: 'X';
        font-size: ${size.atom.val()};
        font-weight: 900;
    }
`;

const Alert = ({ children, dismissable = false, message, ...props }) => {
    const [isVisible, setIsVisible] = useState(true);
    const dismissAlert = () => setIsVisible(false);
    if (!isVisible) return null;

    return <Container {...props} data-testid="alert">
        {children || <p>{message}</p>}
        {dismissable && <Dismiss {...props} onClick={dismissAlert} data-testid="dismiss-button" />}
    </Container>;
};

export default Alert;
