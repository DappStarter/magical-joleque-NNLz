require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope arctic surge short bitter birth predict unique grace merry flock genuine'; 
let testAccounts = [
"0x32151babb2d8bcb8c4c88d9cb76dce9e2f48ba6498d311fe5072f56fea440b0f",
"0x84ff19fee3327d68847dbf6504efab4ec20a056030876ac98fda66522f192f7d",
"0xb21ed427a8b264cc44284149ed203ef95aa9a6dcf117f6a91e51ffa9861f8ccc",
"0x451034e0420588712ddcf6f5f692ece5f21bd18384061f6c1eab54e57c5ed069",
"0x227a682526bd182d6e728126a0c7b0a0d96f901fd1e4ce8fad40db25c17ad9b3",
"0xd19edd7bfdf2ee7bbb3fbaecfd66729d6147776d0856f6be9feeca49e20953bb",
"0xf3c6120b0213a65a1adce3b7286800cdd1aaaa0ec07fd95092a9da5c57f67dea",
"0xb413578fd21d582df7e31bd52f495190df951bd85ab6b74224c69f52bd7badd6",
"0x911e792ad0e1b4676501d3682ec9d16446e4fc6c111722c348b60cbf8e28d03f",
"0x511b98285499b88acb863375b4a49b2497530d65cf48f367de7c2bbb4f369148"
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


