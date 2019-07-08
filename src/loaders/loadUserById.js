import axios from "axios";

export default (id) => {
  return new Promise((resolve) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => {
        const { data: user } = response;
        // console.debug(users);
        resolve(user);
      })
      .catch(e => {
        console.error('Error fetching user');
        resolve([]);
      });
  })
};
