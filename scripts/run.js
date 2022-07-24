const { hexStripZeros } = require("ethers/lib/utils")

const main = async () => {
    // compiles contract 'Domains.sol'
    const domainContractFactory = await hre.ethers.getContractFactory('Domains');
    // deploy contract to blockchain
    const domainContract = await domainContractFactory.deploy();
    // wait until contract mined/deployed
    await domainContract.deployed();
    // give addr of deployed contract
    console.log("Domains contract deployed to: ", domainContract.address);
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

runMain();