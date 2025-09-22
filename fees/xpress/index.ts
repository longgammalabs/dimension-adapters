import { SimpleAdapter } from "../../adapters/types";
import { CHAIN } from "../../helpers/chains";
import { fetchFee } from "../../dexs/xpress";

const adapter: SimpleAdapter = {
  adapter: {
    [CHAIN.SONIC]: {
      fetch: fetchFee(CHAIN.SONIC),
    },
  },
};

export default adapter;
