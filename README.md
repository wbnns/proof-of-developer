# Proof of Developer

A simple Node.js package to check if a given GitHub username has any commit history. If there are commits, it returns the number of commits.

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/proof-of-developer.git
cd proof-of-developer
npm install

## Configuration

Create a .env file in the project root directory with your GitHub token:
```
GITHUB_TOKEN=your_github_token
Replace your_github_token with your actual token.
```

## Usage

Import and use the hasCommits function:
```
const proofOfDeveloper = require('./proof-of-developer');

(async () => {
  const result = await proofOfDeveloper.hasCommits('github_username');
  console.log(result);
})();
```

Replace github_username with the GitHub username you want to check.

The function returns an object with the following properties:

+ `hasCommits`: A boolean indicating if the user has any commits.
+ `commitCount`: The number of commits if `hasCommits` is `true`, otherwise `0`.

## License

[MIT License](LICENSE)
