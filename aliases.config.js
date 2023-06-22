const aliases = {
  '@': 'src',
  '@src': 'src'
};
module.exports = {
  jest: {}
};
// eslint-disable-next-line guard-for-in, no-restricted-syntax
for (const alias in aliases) {
  module.exports.jest[`^${alias}/(.*)$`] = `<rootDir>/${aliases[alias]}/$1`;
}
