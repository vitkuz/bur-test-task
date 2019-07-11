const login = (data) => {
    const errors = [];

    if (errors.length > 0) {
        return [error, data];
    } else {
        return [null, data]
    }
};

export default login;
