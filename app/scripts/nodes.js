'use strict';
var nodes = function () {}
nodes.customNode = require('./nodeHelpers/customNode');
nodes.infuraNode = require('./nodeHelpers/infura');
nodes.metamaskNode = require('./nodeHelpers/metamask');
nodes.nodeTypes = {
    ETH: "ETH",
    ETC: "ETC",
    MUS: "MUSIC",
    Ropsten: "ROPSTEN ETH",
    Kovan: "KOVAN ETH",
    Rinkeby: "RINKEBY ETH",
    RSK: "RSK",
    EXP: "EXP",
    UBQ: "UBQ",
    LBC: "LBC",
    Custom: "CUSTOM ETH"
};
nodes.ensNodeTypes = [nodes.nodeTypes.ETH, nodes.nodeTypes.Ropsten, nodes.nodeTypes.LBC];
nodes.domainsaleNodeTypes = [nodes.nodeTypes.ETH, nodes.nodeTypes.Ropsten, nodes.nodeTypes.LBC];
nodes.customNodeObj = {
    'name': 'CUS',
    'blockExplorerTX': '',
    'blockExplorerAddr': '',
    'type': nodes.nodeTypes.Custom,
    'eip155': false,
    'chainId': '',
    'tokenList': [],
    'abiList': [],
    'service': 'Custom',
    'lib': null
};
nodes.nodeList = {
    'lbc_dev': {
        'name': 'LBC',
        'blockExplorerTX': 'https://etherscan.io/address/[[txHash]]',
        'blockExplorerAddr': 'https://etherscan.io/address/[[address]]',
        'type': nodes.nodeTypes.LBC,
        'eip155': true,
        'chainId': 1379,
        'tokenList': require('./tokens/lbcTokens.json'),
        'abiList': require('./abiDefinitions/lbcAbi.json'),
        'service': 'MyEtherWallet',
        'lib': new nodes.customNode('https://node1.dev.let.bet', '')
    }
};


nodes.ethPrice = require('./nodeHelpers/ethPrice');
module.exports = nodes;