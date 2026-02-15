import type { ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
  className?: string
  as?: 'div' | 'main' | 'nav'
}

function Container({ children, className = '', as = 'div' }: ContainerProps) {
  const Component = as

  return (
    <Component className={`mx-auto w-full max-w-6xl px-6 md:px-10 ${className}`.trim()}>
      {children}
    </Component>
  )
}

export default Container
