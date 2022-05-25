/**
 * @module Defines key combination literal types and key match function
 *
 * @example
 * // returns true if the keyboard event e is Shift+Ctrl+D
 * matchKeys(e, 'Shift+Ctrl+D')
 */
/**
 * @summary checks if a keyboard input event matches a `KeyCombination` or at
 * least one in the list of `KeyCombination` supplied.
 * @param e KeyboardEvent
 * @param key KeyCombination string or a array of KeyCombinations
 * @returns true if the key event matches any of the KeyCombinations passed in
 * @example
 * // returns true if the keyboard event e is Shift+Ctrl+D
 * matchKeys(e, 'Shift+Ctrl+D')
 */
export const matchKeys = (e, key) => {
    if (typeof key == 'string') {
        key = [key];
    }
    return key.some((k) => {
        const ctrl = k.includes('Ctrl');
        const shift = k.includes('Shift');
        const alt = k.includes('Alt');
        const meta = k.includes('Meta');
        // only a modifier key
        if (['Ctrl', 'Shift', 'Alt', 'Meta'].includes(k)) {
            return (e.ctrlKey == ctrl &&
                e.shiftKey == shift &&
                e.altKey == alt &&
                e.metaKey == meta);
        }
        // key or modifier(s) + key
        const code = k.split('+').pop();
        return (e.ctrlKey == ctrl &&
            e.shiftKey == shift &&
            e.altKey == alt &&
            e.metaKey == meta &&
            e.code == code);
    });
};
