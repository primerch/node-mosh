console.log("Before");

getUser(1, (user) => {
  console.log(`Github username: ${user.githubUsername}`);
  getRepository(user.githubUsername, (repos) => {
    console.log(`Github Repos: ${repos}`);
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
