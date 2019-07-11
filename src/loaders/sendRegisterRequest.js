import axios from "axios";

export default () => {
    return new Promise((resolve) => {
        axios
            .get('https://jsonplaceholder.typicode.com/user/1')
            .then(response => {
                const { data: user } = response;
                // console.debug(users);
                resolve(user);
            })
            .catch(e => {
                console.error('Error fetching users', e);
                resolve([]);
            });
    })
};
