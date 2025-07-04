"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface Web3ContextType {
  isConnected: boolean
  connect: () => Promise<void>
  disconnect: () => void
  account: string | null
}

const Web3Context = createContext<Web3ContextType>({
  isConnected: false,
  connect: async () => {},
  disconnect: () => {},
  account: null,
})

export const useWeb3 = () => useContext(Web3Context)

export function Web3Provider({ children }: { children: ReactNode }) {
  const [isConnected, setIsConnected] = useState(false)
  const [account, setAccount] = useState<string | null>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const connect = async () => {
    try {
      if (typeof window !== "undefined" && window.ethereum) {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" })
        if (accounts.length > 0) {
          setAccount(accounts[0])
          setIsConnected(true)
        }
      } else {
        console.log("Please install MetaMask or another Ethereum wallet")
      }
    } catch (error) {
      console.error("Error connecting to wallet:", error)
    }
  }

  const disconnect = () => {
    setAccount(null)
    setIsConnected(false)
  }

  // Don't render anything on the server
  if (!isClient) {
    return <>{children}</>
  }

  return <Web3Context.Provider value={{ isConnected, connect, disconnect, account }}>{children}</Web3Context.Provider>
}

// Add default export
export default Web3Provider
