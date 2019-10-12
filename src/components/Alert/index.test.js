import React from 'react';
import { render } from '@testing-library/react';

import Alert from './index';

describe('Alert', () => {
    it('renders a message', () => {
        const testMessage = 'A test message';
        const { queryByText } = render(<Alert message={testMessage} />);
        expect(queryByText(testMessage)).not.toBeNull();
    });
});