const forceSync = require('sync-rpc')

const packageListSync = forceSync(require.resolve('./packageList'))

module.exports = packageListSync
