import unit from './unit';

const createMolecule = (value) => ({
    small: value.val(0.75),
    medium: value.val(1.25),
    normal: value.val(1),
    large: value.val(1.5),
});

//Exposes the different sizes allowed for elements
export const atom = unit(1);

// "Molecules" sizes 
export const border = atom.val(0.0625); // forces border to be 1px (in rems)
export const radius = atom.val(0.3750); // radius = 6px (in rems)
export const margin = createMolecule(atom);
export const padding = createMolecule(atom);
// TODO: re-define the way we create sizes!
export const icon = createMolecule(unit(2));