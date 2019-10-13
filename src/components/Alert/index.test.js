import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import Alert from './index';

describe('Alert', () => {
    it('renders a message', () => {
        const testMessage = 'A test message';
        const { queryByText } = render(<Alert message={testMessage} />);
        expect(queryByText(testMessage)).not.toBeNull();
    });

    it('has a way to dismiss itself', () => {
        const testMessage = 'A test message';
        const { getByTestId, queryByText } = render(<Alert message={testMessage} dismissable={true} />);
        expect(queryByText(testMessage)).not.toBeNull();
        fireEvent.click(getByTestId('dismiss-button'));
        expect(queryByText(testMessage)).toBeNull();
    });
});