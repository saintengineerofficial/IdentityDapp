"use client"

import React, { useState, useEffect } from "react"
import { usePrivy } from "@privy-io/react-auth"

import { Button } from "@/components/ui/button"
import { useWallets } from "@privy-io/react-auth"

import { X, AlignJustify } from "lucide-react"
import Link from "next/link"
import DropdownMenu from "./drop-down-menu"
import { getUserByAddress } from "@/utils/queries"

const ActionButtons = () => {
  const { ready, authenticated, login, logout } = usePrivy()

  const { wallets } = useWallets()

  const [isDropdownVisible, setIsDropdownVisible] = useState(false)
  const [userInfo, setUserInfo] = useState()

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible)
  }

  const closeDropdown = () => {
    setIsDropdownVisible(false)
  }

  useEffect(() => {
    const getUserInfo = async () => {
      const currentUser = await getUserByAddress(wallets[0]?.address)
      console.log("🚀 ~ getUserInfo ~ currentUser:", currentUser)
      setUserInfo(currentUser)
    }

    ready && getUserInfo()
  }, [ready, authenticated])

  return (
    <div className="pr-2">
      <div className=" items-center justify-center flex gap-5">
        {userInfo && <div className="font-medium">{userInfo.address}</div>}
        <div className="flex xl:space-x-4">
          {authenticated && userInfo !== "User does not exist." ? (
            <>
              <Link href={"/dashboard"} className=" lg:flex items-center hidden">
                <div className="">Dashboard</div>
              </Link>
              <div className="font-thin lg:flexml-4 mr-0 items-center hidden">|</div>
            </>
          ) : authenticated && userInfo == "User does not exist." ? (
            <>
              <Link href={"/onboard"} className="lg:flexitems-centerhidden">
                <div className="">Get DID</div>
              </Link>
              <div className="font-thin lg:flex items-center ml-4 mr-0 hidden">|</div>
            </>
          ) : null}
        </div>
        <div className="flex lg:space-x-2 items-center pr-4">
          {authenticated ? (
            <Button className="hidden lg:block " onClick={logout}>
              Disconnect
            </Button>
          ) : (
            <Button className="hidden lg:block" onClick={login}>
              Connect
            </Button>
          )}
        </div>
      </div>

      {isDropdownVisible && (
        <div onClick={toggleDropdown} className=" rounded-full xl:hidden">
          <X className="h-5 w-5  items-center justify-center rounded-full" />
        </div>
      )}
      {!isDropdownVisible && (
        <div onClick={toggleDropdown} className="flex lg:hidden">
          <AlignJustify className="h-6 w-6 items-center justify-center mr-2" />
        </div>
      )}

      {isDropdownVisible && <DropdownMenu onClose={closeDropdown} />}
    </div>
  )
}

export default ActionButtons
