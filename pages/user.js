import Users from "../components/users";

const User = ({ user }) => {
    return (
        <div>
            <Users user={user} />
        </div>
    );
};

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const posts = await res.json()
    return {
        props: {
            user: posts
        }
    }
}

export default User;