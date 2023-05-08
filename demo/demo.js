const proofOfDeveloper = require('proof-of-developer');

(async () => {
  const result = await proofOfDeveloper.hasCommits('wbnns');
  console.log(result);
})();

