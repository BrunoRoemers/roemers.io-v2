
import React from 'react'

interface Props {
  children?: React.ReactNode,
}

export const Container = ({ children }: Props) => {
  return (
    <div className="flex justify-center">
      <div className='px-6 grow max-w-4xl'>
        {children}
      </div>
    </div>
  )
}

export default Container;
