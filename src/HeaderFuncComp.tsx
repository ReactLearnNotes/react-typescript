export interface IContainerProps {
  visible: boolean
  controller: () => void
}

const HeaderFuncComp = ({
  visible = false,
  controller = () => {},
}: IContainerProps): JSX.Element => {
  return <p> Container </p>
}

export default HeaderFuncComp
