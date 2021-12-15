import React from 'react'

interface Props {
  children?: React.ReactNode,
}

export const Theme = ({ children }: Props) => {
  return (
    <main className='min-h-screen font-body'>
      {children}
    </main>
  )
}

export default Theme;
