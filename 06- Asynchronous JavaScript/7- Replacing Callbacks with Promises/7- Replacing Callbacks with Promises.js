getUser(1)
  .then((user) => {
    // This callback function RETURNS a Promise
    // .then() will wait for this Promise to resolve
    // and pass the resolved value to the next .then()
    return getRepositories(user.githubUsername); // Returns Promise<string[]>
  })
  .then((repos) => {
    // This callback receives the resolved VALUE (not the Promise)
    // repos is now string[], not Promise<string[]>

    // This callback function RETURNS another Promise
    return getCommits(repos[0]); // Returns Promise<string[]>
  })
  .then((commits) => {
    // This callback receives the resolved VALUE (not the Promise)
    // commits is now string[], not Promise<string[]>

    // This callback function RETURNS a regular value
    return commits.length; // Returns number (not a Promise)
  })
  .then((count) => {
    // This callback receives the regular value directly
    // count is now number
    // No return statement = returns undefined
  })
  .catch((e) => console.log(e));

function getUser(id) {
  return new Promise((resolve, reject) => {
    resolve({ id: 1, githubUsername: "Reacher" });
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    resolve(["repo1", "repo2", "repo3"]);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    resolve(["commit1", "commit2", "commit3"]);
  });
}
