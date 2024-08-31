export function generateRandomId(length = 36) {
    const validChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789._-';

    if (length > 36) {
        throw new Error('Document ID must be at most 36 characters long.');
    }

    // Первый символ не может быть специальным
    const firstChar = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    // Генерируем первый символ
    let id = firstChar.charAt(Math.floor(Math.random() * firstChar.length));

    // Генерируем оставшиеся символы
    for (let i = 1; i < length; i++) {
        id += validChars.charAt(Math.floor(Math.random() * validChars.length));
    }

    return id;
}