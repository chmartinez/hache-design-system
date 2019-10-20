import React from 'react';
import { render } from '@testing-library/react';

import Icon from './index';

describe('Icon', () => {
    it('renders an icon with an svg inside of it', () => {
        const { container } = render(<Icon type="close" />);
        const icon = container.querySelector('i');
        expect(icon).not.toBeNull();
        const svg = icon.querySelector('svg');
        expect(svg).not.toBeNull();
    });

    it('renders different icons', () => {
        const { container: iconOne } = render(<Icon type="up" />);
        const { container: iconTwo } = render(<Icon type="down" />);
        expect(iconOne.innerHTML).not.toEqual(iconTwo.innerHTML);
    });
});