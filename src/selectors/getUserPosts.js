export default function getUserPosts(posts, { id }) {
  return posts.filter(post => {
    return post.userId === id
  })
}
