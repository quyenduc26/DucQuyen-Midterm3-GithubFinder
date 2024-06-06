import RepoItem from "./RepoItem";

function Repos({ repos }) {
  return (
    <>
      <h2>User's Repos</h2>
      <div className="cardList">
        {repos.map((repo, index) => (
          <RepoItem key={index} repo={repo} />
        ))}
      </div>
    </>
  );
}

export default Repos;