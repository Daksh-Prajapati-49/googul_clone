import React from 'react'
import { BallTriangle } from  'react-loader-spinner'

export const Loading = () => {
  return (
    <div className="flex justify-center items-center p-5">
        <BallTriangle color="#00BFFF" height={80} width={80} />
    </div>
  )
}
