import "@nomiclabs/hardhat-waffle";
import { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {
  solidity: "0.8.13",
  paths: {
    artifacts: "./compiled/artifacts",
    cache: "./compiled/cache",
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    fantomtest: {
      url: "https://rpc.testnet.fantom.network",
      accounts: [
        "9a7a9bcee58f58e8ba2b705875260e2d6c65115a5094b6471f444794ee051660",
      ],
    },
  },
};

export default config;
