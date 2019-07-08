import axios from "axios";

export default () => {
  return new Promise((resolve) => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        const { data: users } = response;
        // console.debug(users);
        resolve(users);
      })
      .catch(e => {
        console.error('Error fetching users', e);
        resolve([]);
      });
  })
};
