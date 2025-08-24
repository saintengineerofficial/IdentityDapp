// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("Identi", (m) => {
  const identi = m.contract("Identi");
  return { identi };
});

// 0x779829EE1a38D0e28F957AC0363A1BAa748D1554
