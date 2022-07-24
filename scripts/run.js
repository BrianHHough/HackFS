
const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners(); // Get address of contract owner + random one
    const domainContractFactory = await hre.ethers.getContractFactory('ScoopsDomains'); // compiles contract 'Domains.sol'
    const domainContract = await domainContractFactory.deploy(); // deploy contract to blockchain
    
    await domainContract.deployed(); // wait until contract mined/deployed
    
    console.log("Domains contract deployed to: ", domainContract.address); // give address where deployed contract is at
    console.log("Contract deployed by: ", owner.address); // give address of person deploying contract

    let txn = await domainContract.registerDomainToOwner("polygon"); // Simulate register a name and call address
    await txn.wait();

    const domainOwner = await domainContract.getOwnerAddress("polygon"); // Simulate getting address of domain `polygon`
    console.log("Owner of domain `polygon` is: ", domainOwner);

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