async function displayCommits() {
  try {
    const user = await getUser(1); // Waits for the getUser promise to resolve
    console.log(user);

    const repos = await getRepos(user.githubUsername); // Uses the resolved user's githubUsername for the next request
    console.log(repos);

    const commits = await getCommits(repos[0]); // Passes the first repo to get its commits
    console.log(commits);
  } catch (err) {
    console.log(err.message); // Handles errors from any of the awaited promises above
  }
}

displayCommits();

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, githubUsername: "Reacher" });
    }, 2000); // Simulates delay for async operation (e.g., fetching from API)
  });
}

function getRepos(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000); // Simulates delay for async operation
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["commit1", "commit2", "commit3"]);
    }, 2000); // Simulates delay for async operation
  });
}
