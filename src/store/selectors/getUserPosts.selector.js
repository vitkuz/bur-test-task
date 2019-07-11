export default function getUserPostsSelector(posts, { id }) {
  return posts.filter(post => {
    return post.userId === id
  })
}
