/* eslint-disable react/prop-types */

import UserItem from "./UserItem";
const Users = (props) => {
  const { users } = props;
  return (
    <div style={listStyle}>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};
const listStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
};
export default Users;
