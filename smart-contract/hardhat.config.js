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
      blockGasLimit: 0x1fffffffffffff,
    },
  },
};
