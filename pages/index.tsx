import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaGithub } from "react-icons/fa"
import { getFunnyResponse, Questions } from "../questions"
const Home: NextPage = () => {
  const [amount, setAmount] = useState(0)
  const [showResults, setShowResults] = useState(false)
  return (
    <div className='overflow-'>
      <Head>
        <title>Rice Purity Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='w-screen h-screen overflow-x-hidden'>
        {showResults &&
          <div className='w-screen h-screen absolute z-50 bg-[#181a1b] flex flex-col items-center justify-center'>

            <p className='font-bold text-xl'>Your Score</p>
            <p className='text-6xl text-red-600 font-extrabold'>{100 - amount}</p>
            <p>{getFunnyResponse(amount)}</p>
            <div onClick={() => setShowResults(false)} className='mt-10 p-3 bg-red-500 text-3xl font-bold rounded-md hover:bg-opacity-80 text-center'>
              Close
            </div>
          </div>
        }
        <div className='text-center flex items-center justify-center flex-col gap-3'>
          <p className='text-6xl font-bold'>The Rice Purity Test</p>
          <p className='w-2/3 md:w-1/2'>The Purity Test has historically served as a segue from O-week to true college life at Rice.
            It's a voluntary opportunity for O-week groups to bond, and for students to track the maturation
            of their experiences throughout college.</p>
          <p className='font-bold'>Caution: This is not a bucket list. Completion of all items on this test will likely result in death.</p>
          <p>Click on every item you have done. MPS stands for Member of the Preferred Sex.</p>
        </div>
        <div className='mt-10 flex items-center justify-center w-screen'>
          <div onClick={() => setShowResults(!showResults)} className='p-3 bg-[#2ea44f] text-3xl font-bold rounded-md hover:bg-opacity-80 text-center'>
            Submit
          </div>
        </div>
        <div className='grid md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-10 gap-3 auto-rows-fr m-10'>

          {Questions.map((item, index) => {
            const [selected, setSelected] = useState(false)
            function click() {
              if (selected) setAmount(amount - 1)
              else setAmount(amount + 1)
              setSelected(!selected)
            }
            return (
              <div key={index} onClick={click} className={`bg-gray-800 rounded-md p-5 max-w-[80vw] border-8 ${selected ? "border-green-500" : "border-[#2c3847]"}`}>
                <p className='font-black'>{index + 1}</p>
                <p>{item}</p>
              </div>
            )
          })}
          <div className='flex items-center justify-center w-screen'>
            <div onClick={() => setShowResults(!showResults)} className='p-3 bg-[#2ea44f] text-3xl font-bold rounded-md hover:bg-opacity-80 text-center'>
              Submit
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center gap-3 mb-10'>
          <Link href={"https://github.com/ThykeAdams/RicePurityTest"}>
            <div className='flex items-center gap-3 text-3xl text-gray-400 hover:border-b-2 border-gray-400'>
              <FaGithub />
              <p>Github</p>
            </div>
          </Link>
        </div>
      </div >
    </div >
  )
}

export default Home
