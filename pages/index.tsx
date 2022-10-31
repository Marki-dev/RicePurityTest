import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import WelcomeApp from '../components/apps/welcome'
import MovieSection from '../components/sections/movies'
import { getFunnyResponse, Questions } from "../questions"
const Home: NextPage = () => {
  const [amount, setAmount] = useState(0)
  const [showResults, setShowResults] = useState(false)
  return (
    <div className='overflow-'>
      <Head>
        <title>Create Next App</title>
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
        <div className='grid md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-10 gap-3 auto-rows-fr m-10'>
          <div className='fixed'>
            {amount}
          </div>
          {Questions.map((item, index) => {
            const [selected, setSelected] = useState(false)
            function click() {
              if (selected) setAmount(amount - 1)
              else setAmount(amount + 1)
              setSelected(!selected)
            }
            return (
              <div key={index} onClick={click} className={`bg-gray-800 rounded-md p-5 border-8 ${selected ? "border-green-500" : "border-[#2c3847]"}`}>
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
      </div>
      {/* <MovieSection /> */}
    </div>
  )
}

export default Home
