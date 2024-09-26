import { EthChainId } from '@sentio/sdk/eth';

export const CONFIG = {
  BLOCKCHAIN: EthChainId.ETHEREUM,
  SETTLE_FREQUENCY: 60 * 24,
};

export const MISC_CONSTS = {
  ONE_E18: BigInt('1000000000000000000'),
  ONE_DAY_IN_MINUTE: 60 * 24,
  ZERO_ADDRESS: '0x0000000000000000000000000000000000000000',
  MULTICALL_BATCH: 256,
  MULTICALL: '0xca11bde05977b3631167028862be2a173976ca11',
};

export const PENDLE_POOL_ADDRESSES = {
  SY: '0x253008ba4ae2f3e6488dc998a5321d4eb1a0c905',
  YT: '0x05f0d9ef9103d2f5f16e6807570167d3d8547500',
  LP: [
    {
      address: '0x676106576004ef54b4bd39ce8d2b34069f86eb8f',
      deployedBlock: 20669673,
    },
  ],
  START_BLOCK: 19309573,
  TREASURY: '0x8270400d528c34e1596ef367eedec99080a1b592',
  EQB_STAKING: ['0x480c169fe0ec22a6da5168c84d5d831912b93ae6'],
  // PENPIE_RECEIPT_TOKEN: ['0xee25071601550d335a044806502a4162066ecd02'],
  STAKEDAO_RECEIPT_TOKEN: "0xf8e1a13ef4545a0a73c5e7466cdc4c57b3d15c90",
  LIQUID_LOCKERS: [
    // {
    //   // Penpie
    //   address: '0x6e799758cee75dae3d84e09d40dc416ecf713652',
    //   lpToken: '0x676106576004ef54b4bd39ce8d2b34069f86eb8f',
    //   receiptToken: '0xee25071601550d335a044806502a4162066ecd02',
    // },
    {
      // EQB
      address: '0x64627901dadb46ed7f275fd4fc87d086cff1e6e3',
      lpToken: '0x676106576004ef54b4bd39ce8d2b34069f86eb8f',
      receiptToken: '0x480c169fe0ec22a6da5168c84d5d831912b93ae6',
    },
    {
      // Stakedao
      address: '0xd8fa8dc5adec503acc5e026a98f32ca5c1fa289a',
      lpToken: '0x676106576004ef54b4bd39ce8d2b34069f86eb8f',
      receiptToken: '0xf8e1a13ef4545a0a73c5e7466cdc4c57b3d15c90',
    }
  ],
};
