const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  // Uncommenting the defaults below
  // provides for an easier quick-start with Ganache.
  // You can also follow this format for other networks;
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!
  //
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    hecoTestnet: {
      provider: new HDWalletProvider('', "https://http-testnet.hecochain.com"),
      network_id: "256",
      gas: 8e6,
      gasPrice: 1e9,
      skipDryRun: true,
    }
  },
  plugins: [
    "solidity-coverage",
    'truffle-plugin-verify'
  ],
  compilers: {
    solc: {
      version: "0.6.12",
      settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 200
        },
        // evmVersion: "byzantium"
      }
    }
  },
  api_keys: {
    etherscan: ''
  }
};
