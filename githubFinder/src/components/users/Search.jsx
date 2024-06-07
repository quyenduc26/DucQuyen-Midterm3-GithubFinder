import { ThemeContext } from "../../context/ThemeContext";
import { useEffect, useState } from "react";
import Users from "./Users";
import { searchUserApi } from "../../api";
import { useContext } from "react";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
const Search = () => {
  const context = useContext(ThemeContext);
  const [text, setText] = useState("");
  const [users, setUsers] = useState([]);
  const history = useHistory();
  const queryParameter = useLocation();

  const searchUsers = async (text) => {
    const searchUserData = await searchUserApi(text);
    setUsers(searchUserData);
  };
  const clearUsers = () => {
    setUsers([]);
  };

  useEffect(() => {
    const query = queryParameter.search.split("=")[1];
    if (query) {
      
      setText(query);
      searchUsers(query);
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("Please enter something");
    } else {
      history.push(`/?search=${text}`);
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
          className={`btn ${
            context.isDarkTheme ? "darkTheme" : "bg-success"
          } btn-block`}
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

