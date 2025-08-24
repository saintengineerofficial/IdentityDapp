import { ethers } from "ethers";
import Identi from "./Identi.json";

export const contract = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  if (window.ethereum) {
    const singer = provider.getSigner();
    const contract = new ethers.Contract(
      "0x7F1179e9447dBfFbfdf18be2D4a8F8147eF216d7",
      Identi.abi,
      singer
    );
    return contract;
  }
};
