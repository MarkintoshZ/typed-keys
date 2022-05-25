var typed_keys = (function (exports) {
    'use strict';

    const matchKeys = (e, key) => {
        if (typeof key == 'string') {
            key = [key];
        }
        return key.some((k) => {
            const ctrl = k.includes('Ctrl');
            const shift = k.includes('Shift');
            const alt = k.includes('Alt');
            const meta = k.includes('Meta');
            if (['Ctrl', 'Shift', 'Alt', 'Meta'].includes(k)) {
                return (e.ctrlKey == ctrl &&
                    e.shiftKey == shift &&
                    e.altKey == alt &&
                    e.metaKey == meta);
            }
            const code = k.split('+').pop();
            return (e.ctrlKey == ctrl &&
                e.shiftKey == shift &&
                e.altKey == alt &&
                e.metaKey == meta &&
                e.code == code);
        });
    };

    exports.matchKeys = matchKeys;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({});
