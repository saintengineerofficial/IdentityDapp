"use client"

import { Button } from "@/components/ui/button"

import Image from "next/image"
import Link from "next/link"

import { motion } from "framer-motion"
import { useRef } from "react"

import { useMediaQuery } from "react-responsive"

import { IconBriefcase, IconIdBadge2, IconLockSquareRounded, IconShare } from "@tabler/icons-react"
import { useState } from "react"
import { PiArrowRight } from "react-icons/pi"

const tabs = [
  {
    icon: <IconIdBadge2 className="mr-2 h-8 w-8 rounded-md bg-red-100 p-1 text-red-600" />,
    name: "Create DID",
    description: "Get your DID on the blockchain.",
    more: (
      <div className="flex items-center text-red-600">
        Learn more <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),
    image: "/assets/PlantDoodle.svg",
  },
  {
    icon: <IconShare className="mr-2 h-8 w-8 rounded-md bg-purple-100 p-1 text-purple-600" />,
    name: "Share DID",
    description: "Create ones, share and use everywhere ",
    more: (
      <div className="flex items-center text-purple-600">
        Learn more <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),
    image: "/assets/GroovyDoodle.svg",
  },
  {
    icon: <IconLockSquareRounded className="mr-2 h-8 w-8 rounded-md bg-blue-100 p-1 text-blue-600" />,
    name: "Privacy ",
    description: "Control who sees your information",
    more: (
      <div className="flex items-center text-blue-600">
        Learn more <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),

    image: "/assets/CoffeeDoddle.svg",
  },
  {
    icon: <IconBriefcase className="mr-2 h-8 w-8 rounded-md bg-yellow-100 p-1 text-yellow-600" />,
    name: "Find Jobs",
    description: "Discover developer opportunities.",
    more: (
      <div className="flex items-center text-yellow-600">
        Learn more <PiArrowRight className="ml-1 text-sm" />
      </div>
    ),

    image: "/assets/RunningDoodle.svg",
  },
]

const HeroSection = () => {
  const ref = useRef(null)

  const [activeTab, setActiveTab] = useState(tabs[0])

  const isSmallScreen = useMediaQuery({ maxWidth: 767 })

  return (
    <div className="flex flex-col md:items-center">
      <div className="flex justify-center px-8 pt-6 text-center text-5xl font-medium md:w-2/3 lg:px-0 xl:w-1/2 xl:pt-14 xl:text-6xl xl:font-medium 2xl:w-1/3">
        Your Digital Identity, Reinvented{" "}
      </div>

      <p className="mx-auto w-2/3 pt-4 text-center text-2xl">
        Create Once, Identify Everywhere with <span className="font-bold text-sky-500">IdentiFi</span>
      </p>

      <div className="flex items-center justify-center gap-4 pt-6">
        <Link href="/">
          <Button className="py-1">
            <div className="flex items-center justify-center">
              <div className="text-lg">Create Identity</div>
              <div>
                <PiArrowRight className="ml-2" />
              </div>
            </div>
          </Button>
        </Link>
      </div>

      <div className="items-center justify-center pt-10 xl:pt-20">
        <Image
          src="/assets/ReadingSideDoodle.svg"
          alt="hero image"
          width={1000}
          height={1000}
          className="mx-auto flex w-60 items-center justify-center xl:w-80"
        />
      </div>
      {isSmallScreen ? (
        <div className="mx-auto grid w-4/5 place-content-center place-items-center items-center justify-between gap-4 space-x-0 hover:cursor-pointer sm:grid-cols-2 md:grid-cols-1 xl:w-3/4 xl:space-x-4 2xl:w-[55%]">
          {tabs.map(tab => (
            <motion.div
              key={tab.name}
              className={`h-36 w-60 justify-center space-x-4 sm:my-10 xl:my-0 xl:flex xl:pt-4 ${activeTab === tab ? "rounded-xl border bg-white pt-2" : "m rounded-xl bg-[#f6f5f4] pt-2 shadow-md"} `}
              onMouseEnter={() => setActiveTab(tab)}>
              <div className="px-4">
                <div className="flex items-center">
                  <div>{tab.icon}</div>
                  <div className="text-2xl font-medium">{tab.name}</div>
                </div>

                <motion.div
                  className="flex flex-col text-sm"
                  initial={{ y: 0 }}
                  animate={{ y: activeTab === tab ? 10 : 25 }}
                  transition={{ duration: 0.2 }}>
                  <div>
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                      {tab.description}
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="flex w-4/5 items-center justify-between gap-4 hover:cursor-pointer xl:w-3/4 xl:space-x-4 2xl:w-[55%]">
          {tabs.map(tab => (
            <motion.div
              key={tab.name}
              className={`h-36 w-60 justify-center space-x-4 sm:my-10 xl:my-0 xl:flex xl:pt-4 ${activeTab === tab ? "rounded-xl border bg-white pt-2" : "m rounded-xl bg-[#f6f5f4] pt-2 shadow-md"} `}
              onMouseEnter={() => setActiveTab(tab)}>
              <div className="px-4">
                <div className="flex items-center">
                  <div>{tab.icon}</div>
                  <div className="text-2xl font-medium">{tab.name}</div>
                </div>

                <motion.div
                  className="flex flex-col text-sm"
                  initial={{ y: 0 }}
                  animate={{ y: activeTab === tab ? 10 : 25 }}
                  transition={{ duration: 0.2 }}>
                  <div>
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                      {tab.description}
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}

export default HeroSection
