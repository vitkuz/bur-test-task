import axios from "axios";

export default () => {
  return new Promise((resolve) => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        const { data: posts } = response;
        resolve(posts);
      })
      .catch(e => {
        console.error('Error fetching posts', e);
        resolve([]);
      });
  })
};
