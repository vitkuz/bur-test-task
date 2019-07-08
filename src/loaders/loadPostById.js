import axios from "axios";

export default (id) => {
  return new Promise((resolve) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => {
        const { data: post } = response;
        // console.debug(users);
        resolve(post);
      })
      .catch(e => {
        console.error('Error fetching post', e);
        resolve([]);
      });
  })
};
