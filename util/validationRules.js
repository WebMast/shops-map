export const validationRules = {
    isEmail(value) {
        const regex = /^\S+@\S+\.\S+$/;

        return regex.test(value);
    },

    isNotEmpty(value) {
        return value.trim() !== '';
    },

    hasMinLength(value, count) {
        return value.trim().length >= count;
    }
}