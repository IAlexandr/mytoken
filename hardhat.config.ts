import "@nomiclabs/hardhat-waffle";
import { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {
  solidity: "0.8.3",
  paths: {
    artifacts: "./compiled/artifacts",
    cache: "./compiled/cache",
  },
};

export default config;