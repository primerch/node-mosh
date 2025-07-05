console.log("Before");

getUser(1, displayUser); // Start the dependency chain

console.log("After");

function displayUser(user) {
  console.log(`Username: ${user.githubUsername}`);
  getRepository(user.githubUsername, displayRepository); // Step 2: Depends on user.githubUsername from Step 1
}

function displayRepository(repos) {
  console.log(`Repositories: ${repos}`);
  getCommits(repos[0], displayCommits); // Step 3: Depends on repos[0] from Step 2
}

function displayCommits(commits) {
  console.log(`Commits: ${commits}`); // Step 4: Depends on commits from Step 3
}

function getUser(id, callback) {
  // Step 1: Independent - only needs id
  setTimeout(() => {
    callback({ id: 1, githubUsername: "Reacher" });
  }, 2000);
}

function getRepository(username, callback) {
  // Step 2: Depends on username from previous step
  setTimeout(() => {
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}

function getCommits(repo, callback) {
  // Step 3: Depends on repo from previous step
  setTimeout(() => {
    callback(["commit1", "commit2", "commit3"]);
  }, 2000);
}
