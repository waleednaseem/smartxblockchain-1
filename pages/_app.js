import react, { useEffect } from 'react'
import '../styles/globals.css'
import store from '../redux/Store'
import { Provider } from 'react-redux'
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
  lightTheme
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, sepolia } from 'wagmi/chains';
// import { jsonRpcProvider } from '@wagmi/core/providers/jsonRpc'

import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient } = configureChains(
  [
    mainnet,
    polygon,
    optimism,
    arbitrum
  ],
  [
    // jsonRpcProvider({
    //   rpc: (chain) => ({
    //     http: `https://cloudflare-eth.com`,
    //   }),
    // }),
    publicProvider()
  ]
);
// https://mainnet.infura.io/v3/0b3aa2b530f741ab8521a93cb5302f93
const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const use = async () => {
      (await import('tw-elements')).default;
    };
    use();
  }, []);

  return <Provider store={store}>
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider theme={lightTheme({
        accentColor: 'primary',
        accentColorForeground: 'white',
        borderRadius: 'medium',
        fontStack: 'system',
      })} chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  </Provider>

}

export default MyApp
