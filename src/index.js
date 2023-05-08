const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const headers = { Authorization: `token ${GITHUB_TOKEN}` };

async function hasCommits(username) {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}/events/public`, { headers });

    const commitEvents = response.data.filter(event => event.type === 'PushEvent');

    if (commitEvents.length > 0) {
      const commitCount = commitEvents.reduce((count, event) => count + event.payload.commits.length, 0);
      return { hasCommits: true, commitCount };
    }

    return { hasCommits: false, commitCount: 0 };
  } catch (error) {
    console.error(`Error fetching data for user ${username}:`, error.message);
    return { hasCommits: false, commitCount: 0 };
  }
}

module.exports = { hasCommits };

