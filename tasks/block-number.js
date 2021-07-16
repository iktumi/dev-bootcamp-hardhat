task(
    "block-number",
    "Prints the current block number",
    async (_, { ethers }) => {
        await ethers.provider.getBlock().then((blockNumber) => {
            console.log(  blockNumber)
        })
    }
);

task(
    "block-date",
    "Prints the current block number",
    async (_, { ethers }) => {
        await ethers.provider.getBlock().then((blockNumber) => {
            console.log(  blockNumber.timestamp)
        })
    }
)

task("block-date-1", "Prints the given block date")
    .addParam("blocknumber", "The Blocks's number")
    .setAction(async taskArgs => { 
        console.log("Getting block info for " + taskArgs.blocknumber)
        await ethers.provider.getBlock(taskArgs.blocknumber).then((block) => {
            console.log(  blockNumber.timestamp)
        }) 
    })
