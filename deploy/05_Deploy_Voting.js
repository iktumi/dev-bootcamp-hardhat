let { networkConfig } = require('../helper-hardhat-config')

module.exports = async ({
    getNamedAccounts,
    deployments,
    getChainId
}) => {

    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = await getChainId()
    
    let name1 = ethers.utils.formatBytes32String('harry')
    let name2 = ethers.utils.formatBytes32String('josh')
    console.log(name1 + ' ' + name2)
    var myData = [name1, name2];

    log("----------------------------------------------------")
    const voting = await deploy('Ballot', {
        from: deployer,
        args: [myData],
        log: true
    })
    log("Run Voting with command:")
    log("npx hardhat voting-vote --contract " + voting.address + " --network " + networkConfig[chainId]['name'])
    log("----------------------------------------------------")

}

module.exports.tags = ['all', 'feed', 'main']
