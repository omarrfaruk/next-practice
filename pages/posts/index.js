import Link from "next/link"
function Posts({ posts }) {
    return (
        <div>
            {
                posts.map(post => {
                    return (
                        <div key={post.id}>
                            <Link href={`/posts/${post.id}`} passHref>
                                <p >
                                    {post.id}
                                </p>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Posts

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json()

    return { props: { posts } }
}