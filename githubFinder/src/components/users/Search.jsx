import { ThemeContext } from "../../context/ThemeContext";
import { useState } from "react";
import Users from "./Users";
import { searchUserApi } from "../../api";
import { useContext } from "react";
const Search = () => {
  const context = useContext(ThemeContext)

  const [text, setText] = useState("");
  const [users, setUsers] = useState([]);
  const searchUsers = async (text) => {
    const searchUserData = await searchUserApi(text)
    setUsers(searchUserData)
  };
  const clearUsers = () => {
    setUsers([]);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("Please enter something");
    } else {
      searchUsers(text);
      setText("");
    }
  };
  const onChange = (e) => setText(e.target.value);
  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search User"
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className={`btn ${context.isDarkTheme ? "darkTheme" : "bg-success" } btn-block`}
        />
      </form>
      {users.length > 0 && (
        <button className="btn btn-danger btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
      <Users users={users} />
    </div>
  );
};
export default Search;

