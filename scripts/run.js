
const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners(); // Get address of contract owner + random one
    const domainContractFactory = await hre.ethers.getContractFactory('ScoopsDomains'); // compiles contract 'Domains.sol'
    const domainContract = await domainContractFactory.deploy("poly"); // deploy contract to blockchain and append .poly
    
    await domainContract.deployed(); // wait until contract mined/deployed
    
    console.log("===================================================================================");
    console.log("Scoops Domains contract deployed to: ", domainContract.address); // give address where deployed contract is at
    
    console.log("===================================================================================");
    console.log("Contract deployed by: ", owner.address); // give address of person deploying contract

    let txn = await domainContract.registerDomainToOwner("polygon", {value: hre.ethers.utils.parseEther('0.01')}); // Simulate register a name and call address
    await txn.wait();

    const domainOwnerAddress = await domainContract.getOwnerAddress("polygon"); // Simulate getting address of domain `polygon`
    
    console.log("===================================================================================");
    console.log("Owner of Scoops Domain `polygon` is: ", domainOwnerAddress);

    const balanceOfContract = await hre.ethers.provider.getBalance(domainContract.address);

    console.log("===================================================================================");
    console.log("Balance of contract:", hre.ethers.utils.formatEther(balanceOfContract));

    // Error Testing: set a record that doesn't belong to owner
    // txn = await domainContract.connect(randomPerson).setRecordOfDomain("polygon", "This is my scoops domain now (but it shouldn't be)");
    // await txn.wait();
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