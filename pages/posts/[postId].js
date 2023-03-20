export default function SinglePost({ data }) {
  return (
    <div>
      {/* {
        data.map(post => {
          return (
            <div key={post.id}>
              <p >
                {post.id}
              </p>
            </div>
          )
        })
      } */}
      <p>{data.body}{data.id}</p>
    </div>
  )
}

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  const paths = posts.map((user) => ({
    params: { postId: user.id.toString() },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps(context) {
  const { params } = context
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
  const data = await res.json()
  console.log(data);
  return { props: { data } }
}