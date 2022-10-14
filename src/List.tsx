import { PropsWithChildren } from 'react'

interface ICellProps<TData> {
  field: keyof TData
}

const Cell = <T extends Record<string, any>>(
  props: PropsWithChildren<ICellProps<T>>
) => {
  return <p>is Cell</p>
}

interface IDataStruct {
  name: string
  age: number
}

const List = () => {
  return (
    <>
      <Cell<IDataStruct> field="name"></Cell>
    </>
  )
}
