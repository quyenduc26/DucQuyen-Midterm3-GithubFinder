/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import RepoItem from "./RepoItem";

// eslint-disable-next-line react/prop-types
function Repos({ repos }) {
  const listStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gridGap: "1rem",
  };
  return (
    <>
      <h2>User's Repos</h2>
      <div style={listStyle}>
        {repos.map((repo, index) => (
          <RepoItem key={index} repo={repo} />
        ))}
      </div>
    </>
  );
}


export default Repos;