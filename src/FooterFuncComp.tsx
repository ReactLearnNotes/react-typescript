import React from 'react'

export interface IContainer {
  visible: boolean
  controller: () => void
}

const FooterFuncComp: React.FC<IContainer> = ({
  visible = false,
  controller = () => {},
}: IContainer) => {
  return <p>Footer</p>
}
