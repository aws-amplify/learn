const {join} = require('path');
const {readFileSync, writeFileSync} = require('fs');

const awsExportsResolved = (() => {
  try {
    return require.resolve(join(__dirname, '../src/aws-exports.js'));
  } catch (e) {
    return false;
  }
})();

const destination = join(__dirname);

if (awsExportsResolved) {
  const contents = readFileSync(awsExportsResolved, 'utf-8');
  console.log(contents);
} else {
  const inject = `module.exports = null`;
  console.log(inject);
}
