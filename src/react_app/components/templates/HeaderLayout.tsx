import React, { FC, memo } from 'react'

import { Header } from '../organisms/layout/Header'

type Props = {
  children: React.ReactNode
}

export const HeaderLayout: FC<Props> = memo(({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
})
