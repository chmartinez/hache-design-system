import React from 'react';
import { render } from '@testing-library/react';

import Icon from './index';

describe('Icon', () => {
    it('renders an icon with an svg inside of it', () => {
        const { container } = render(<Icon />);
        const icon = container.querySelector('i');
        expect(icon).not.toBeNull();
        const svg = icon.querySelector('svg');
        expect(svg).not.toBeNull();
    });
});