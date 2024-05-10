import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const CusLayout = () => {
  return (
    <>
      <div className=" z-[10] absolute top-0 left-0 right-0 py-4 px-4">
        <Header />
      </div>

      <Outlet />

      <div className=" border-t-2 border-black flex flex-col w-full">
        <div className=" py-3 px-3 bg-blu font-secondary flex flex-col items-center justify-center text-center">
          <p> $SIAMESE is a meme coin with no intrinsic value or expectation of financial return. The coin is completely useless and for entertainment purposes only.</p>
          <p>Copyright 2024 $SIAMESE</p>
        </div>
        <div className=" h-[19px] bg-dark"></div>
        <div className=" h-[19px] bg-light"></div>
      </div>

    </>
  )
}

export default CusLayout