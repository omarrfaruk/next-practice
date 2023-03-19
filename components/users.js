const Users = ({ user }) => {
    return (
        <div>
            {
                user.map(u => {
                    return (
                        <div key={u.id}>
                            id:{u.id}
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Users;