console.log("Before");

getUser(1, (user) => {
  console.log(`Username: ${user.githubUsername}`);
  getRepository(user, (repos) => {
    console.log(`Repositories: ${repos}`);
    getCommits(repos, (commits) => {
      console.log(`Commits: ${commits}`);
    });
  });
});
console.log("After");

function getUser(id, callback) {
  setTimeout(() => {
    callback({ id: 1, githubUsername: "Reacher" });
  }, 2000);
}

function getRepository(username, callback) {
  setTimeout(() => {
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}

function getCommits(repo, callback) {
  setTimeout(() => {
    callback(["commit1", "commit2", "commit3"]);
  }, 2000);
}
