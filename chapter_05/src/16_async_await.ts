// import * as Promise from 'bluebird';

// NOTE: This example was designed to run in node.js

async function main() {
  await loadData();
}

async function loadData() {
  console.log('Awaiting results...');
  const result = await getData();
  console.log(result);
}

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('result!');
    }, 2000);
  });
}

main();
