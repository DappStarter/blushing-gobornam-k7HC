require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give glove fresh speak notice crime remain unknown give knee oppose second'; 
let testAccounts = [
"0x557a39dd08100225cc548869b9cf17cac23fc214f68b2acebf672b3b8e42152f",
"0x18c5b39606b80ec3f23844323f212867bcdc5ccaf191de77a222593b9f8ace94",
"0xa84c5e29cf6f9207083cde1be50dfe91445e581ce276408387a9ecd5844c9dcd",
"0x94a030a6d0ea85b951036ae04571aa0deb14baa340606e922c080ca025b590d2",
"0x4c1d1b389e93f1e54a33ba27d4cf8f7b636a78b2fc24a54ee37f542e385b78d4",
"0xe676d06a4791c7221a8cb55cded2be49c31befa8429ecbf319adf086f3e2160a",
"0x8327ee48f37e556f029bf0fd901a464405f95bc9d21382ba12bd340cea157734",
"0x6c460a38efbcd1744a106b3223458e76fa9feb2a807696b7374f460e2d3d40ee",
"0xdd4281c1b0656f48b0107c3d50cae26e3fc3d40f0417db2d1ddc172ba4951b5b",
"0xf1e240b987c808e8589d5380dafc33c985b1068d1a8f91ff07231ce11e923541"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


