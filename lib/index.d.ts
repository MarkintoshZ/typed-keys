/**
 * @module Defines key combination literal types and key match function
 *
 * @example
 * // returns true if the keyboard event e is Shift+Ctrl+D
 * matchKeys(e, 'Shift+Ctrl+D')
 */
declare type KeyModifier = "Shift" | "Ctrl" | "Alt" | "Meta";
declare type AltLeft = "AltLeft";
declare type AltRight = "AltRight";
declare type ArrowDown = "ArrowDown";
declare type ArrowLeft = "ArrowLeft";
declare type ArrowRight = "ArrowRight";
declare type ArrowUp = "ArrowUp";
declare type Backquote = "Backquote";
declare type Backslash = "Backslash";
declare type Backspace = "Backspace";
declare type BracketLeft = "BracketLeft";
declare type BracketRight = "BracketRight";
declare type CapsLock = "CapsLock";
declare type Comma = "Comma";
declare type ContextMenu = "ContextMenu";
declare type ControlLeft = "ControlLeft";
declare type ControlRight = "ControlRight";
declare type Delete = "Delete";
declare type Digit0 = "Digit0";
declare type Digit1 = "Digit1";
declare type Digit2 = "Digit2";
declare type Digit3 = "Digit3";
declare type Digit4 = "Digit4";
declare type Digit5 = "Digit5";
declare type Digit6 = "Digit6";
declare type Digit7 = "Digit7";
declare type Digit8 = "Digit8";
declare type Digit9 = "Digit9";
declare type End = "End";
declare type Enter = "Enter";
declare type Equal = "Equal";
declare type Escape = "Escape";
declare type F1 = "F1";
declare type F2 = "F2";
declare type F3 = "F3";
declare type F4 = "F4";
declare type F5 = "F5";
declare type F6 = "F6";
declare type F7 = "F7";
declare type F8 = "F8";
declare type F9 = "F9";
declare type F10 = "F10";
declare type F11 = "F11";
declare type F12 = "F12";
declare type Home = "Home";
declare type Insert = "Insert";
declare type KeyA = "KeyA";
declare type KeyB = "KeyB";
declare type KeyC = "KeyC";
declare type KeyD = "KeyD";
declare type KeyE = "KeyE";
declare type KeyF = "KeyF";
declare type KeyG = "KeyG";
declare type KeyH = "KeyH";
declare type KeyI = "KeyI";
declare type KeyJ = "KeyJ";
declare type KeyK = "KeyK";
declare type KeyL = "KeyL";
declare type KeyM = "KeyM";
declare type KeyN = "KeyN";
declare type KeyO = "KeyO";
declare type KeyP = "KeyP";
declare type KeyQ = "KeyQ";
declare type KeyR = "KeyR";
declare type KeyS = "KeyS";
declare type KeyT = "KeyT";
declare type KeyU = "KeyU";
declare type KeyV = "KeyV";
declare type KeyW = "KeyW";
declare type KeyX = "KeyX";
declare type KeyY = "KeyY";
declare type KeyZ = "KeyZ";
declare type MetaLeft = "MetaLeft";
declare type MetaRight = "MetaRight";
declare type Minus = "Minus";
declare type NumLock = "NumLock";
declare type Numpad0 = "Numpad0";
declare type Numpad1 = "Numpad1";
declare type Numpad2 = "Numpad2";
declare type Numpad3 = "Numpad3";
declare type Numpad4 = "Numpad4";
declare type Numpad5 = "Numpad5";
declare type Numpad6 = "Numpad6";
declare type Numpad7 = "Numpad7";
declare type Numpad8 = "Numpad8";
declare type Numpad9 = "Numpad9";
declare type NumpadAdd = "NumpadAdd";
declare type NumpadDecimal = "NumpadDecimal";
declare type NumpadDivide = "NumpadDivide";
declare type NumpadMultiply = "NumpadMultiply";
declare type NumpadSubtract = "NumpadSubtract";
declare type PageDown = "PageDown";
declare type PageUp = "PageUp";
declare type Pause = "Pause";
declare type Period = "Period";
declare type PrintScreen = "PrintScreen";
declare type Quote = "Quote";
declare type ScrollLock = "ScrollLock";
declare type Semicolon = "Semicolon";
declare type ShiftLeft = "ShiftLeft";
declare type ShiftRight = "ShiftRight";
declare type Slash = "Slash";
declare type Space = "Space";
declare type Tab = "Tab";
declare type Key = AltLeft | AltRight | ArrowDown | ArrowLeft | ArrowRight | ArrowUp | Backquote | Backslash | Backspace | BracketLeft | BracketRight | CapsLock | Comma | ContextMenu | ControlLeft | ControlRight | Delete | Digit0 | Digit1 | Digit2 | Digit3 | Digit4 | Digit5 | Digit6 | Digit7 | Digit8 | Digit9 | End | Enter | Equal | Escape | F1 | F2 | F3 | F4 | F5 | F6 | F7 | F8 | F9 | F10 | F11 | F12 | Home | Insert | KeyA | KeyB | KeyC | KeyD | KeyE | KeyF | KeyG | KeyH | KeyI | KeyJ | KeyK | KeyL | KeyM | KeyN | KeyO | KeyP | KeyQ | KeyR | KeyS | KeyT | KeyU | KeyV | KeyW | KeyX | KeyY | KeyZ | MetaLeft | MetaRight | Minus | NumLock | Numpad0 | Numpad1 | Numpad2 | Numpad3 | Numpad4 | Numpad5 | Numpad6 | Numpad7 | Numpad8 | Numpad9 | NumpadAdd | NumpadDecimal | NumpadDivide | NumpadMultiply | NumpadSubtract | PageDown | PageUp | Pause | Period | PrintScreen | Quote | ScrollLock | Semicolon | ShiftLeft | ShiftRight | Slash | Space | Tab;
/**
 * @summary A type hint enabled string template type for keyboard input
 * combinations.
 *
 * The keys are joined with "+" (plus signs) with regular keys following
 * key modifiers such as ctrl and shift. Key duplication is not allowed.
 *
 * @example
 * "A"                // key A
 * "Ctrl"             // Ctrl key
 * "Shift+C"          // Shift + C
 * "Ctrl+Shift+D"     // Ctrl key + shift key + key D
 * "Ctrl+Shift+Alt+G" // Ctrl key + shift key + alt key + key D
 */
export declare type KeyCombination = KeyModifier | Key | `${KeyModifier}+${Key}` | `${KeyModifier2}+${Key}` | `${KeyModifier3}+${Key}`;
declare type StringLike<T> = T extends string ? T : never;
/**
 * @typedef Combination of two different StringLike Types in the form of 'A+B'
 */
declare type Comb2<A, B> = A extends infer U ? B extends infer V ? U extends V ? never : `${StringLike<U>}+${StringLike<V>}` : never : never;
declare type KeyModifier2 = Comb2<KeyModifier, KeyModifier>;
/**
 * @typedef Combination of three different StringLike Types in the form of 'A+B+C'
 */
declare type Comb3<A, B, C> = A extends infer U ? B extends infer V ? C extends infer W ? U extends V ? never : V extends W ? never : `${StringLike<U>}+${StringLike<V>}` : never : never : never;
declare type KeyModifier3 = Comb3<KeyModifier, KeyModifier, KeyModifier>;
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
export declare const matchKeys: (e: KeyboardEvent, key: KeyCombination | KeyCombination[]) => boolean;
export {};
