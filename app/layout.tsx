"use client";
import { defineChain } from "viem";
import { Outfit } from "next/font/google";
import { PrivyProvider } from "@privy-io/react-auth";
import "./globals.css";

const font = Outfit({ subsets: ["latin"] });

// BitTorrent Chain Donau，BTTC，统一的配置信息
// 连接网络信息
const BitTorrent = defineChain({
  id: 1029,
  name: "BitTorrent Chain Donau",
  network: "BitTorrent Chain Donau",
  nativeCurrency: {
    decimals: 18,
    name: "BitTorrent Chain Donau",
    symbol: "BTTC",
  },
  rpcUrls: {
    default: {
      http: ["https://pre-rpc.bt.io/"],
    },
  },
  blockExplorers: {
    default: { name: "Explorer", url: "https://testscan.bt.io" },
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <PrivyProvider
          appId="cmenzck430058la0ctt4lj1gz"
          config={{
            appearance: {
              theme: "light",
              accentColor: "#676FFF",
              logo: "",
            },
            embeddedWallets: {
              createOnLogin: "users-without-wallets",
            },
            defaultChain: BitTorrent,
            supportedChains: [BitTorrent],
          }}
        >
          {children}
        </PrivyProvider>
      </body>
    </html>
  );
}
