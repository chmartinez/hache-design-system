const UNIT = 'rem';

export default (value: number) => ({
    rawValue: value,
    val: (multiplier: number = 1): string => `${value * multiplier}${UNIT}`
});
