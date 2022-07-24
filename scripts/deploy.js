
const main = async () => {
    const domainContractFactory = await hre.ethers.getContractFactory('ScoopsDomains'); // compiles contract 'Domains.sol'
    const domainContract = await domainContractFactory.deploy("poly"); // deploy contract to blockchain and append .poly
    
    await domainContract.deployed(); // wait until contract mined/deployed

    console.log("Scoops Domains contract deployed to: ", domainContract.address); // give address where deployed contract is at


    let txn = await domainContract.registerDomainToOwner("polygon", {value: hre.ethers.utils.parseEther('0.01')}); // Simulate register a name and call address
    await txn.wait();
    console.log("Minted Scoops domain polygon.poly");

    txn = await domainContract.setRecordOfDomain("polygon", "Add Polygon to the .poly name schema")
    await txn.wait();
    console.log("Correctly set record for owner: polygon.poly");

    const domainOwnerAddress = await domainContract.getOwnerAddress("polygon"); // Simulate getting address of domain `polygon`
    console.log("Owner of Scoops Domain `polygon` is: ", domainOwnerAddress);

    const balanceOfContract = await hre.ethers.provider.getBalance(domainContract.address);
    console.log("Balance of contract:", hre.ethers.utils.formatEther(balanceOfContract));

};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();