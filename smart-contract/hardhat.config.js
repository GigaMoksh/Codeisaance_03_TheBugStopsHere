require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
      chainId: 1337,
      allowUnlimitedContractSize: true,
      blockGasLimit: 100000000429720,
      gasPrice: 204369036266,
      gas: 53064000,
    },
  },
};
