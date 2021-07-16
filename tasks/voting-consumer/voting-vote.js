task("voting-vote", "Votes on proposal")
    .addParam("contract", "The address of the Voting consumer contract that you want to read")
    .setAction(async taskArgs => {

        const contractAddr = taskArgs.contract
        const networkId = network.name

        const VotingContract = await ethers.getContractFactory("Ballot")
        console.log("Reading data from Price Feed consumer contract ", contractAddr, " on network ", networkId)

        //Get signer information
        const accounts = await ethers.getSigners()
        const signer = accounts[0]
       
        const votingContractInstance = await new ethers.Contract(contractAddr, VotingContract.interface, signer)
        var result = await votingContractInstance.vote(0)
        console.log('Contract ', contractAddr, ' external data request successfully called. Transaction Hash: ', result.hash)
    })

module.exports = {}
