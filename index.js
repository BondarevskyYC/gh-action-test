// action/index.js
const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    core.info(`Hello, GitHub Action!`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
