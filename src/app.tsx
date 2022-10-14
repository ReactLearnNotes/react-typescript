// This is the most futureproof way to import React. If you set --allowSyntheticDefaultImports (or add "allowSyntheticDefaultImports": true) in your tsconfig.json you can use more familiar imports:

import React from 'react'

type AppProps = {
  message: string
  count: number
  disabled: boolean
  names: string[]
  status: 'success' | 'error'
  obj: object
  obj2: {}
}

type StatelessAppProps = {
  message: string
}

const StatelessApp: React.FunctionComponent<StatelessAppProps> = ({
  message,
}) => <div>{message}</div>

class StatefulApp extends React.Component<
  { message: string },
  { count: number }
> {
  constructor(props: any) {
    super(props)
    this.state = {
      count: 0,
    }
  }
  render() {
    return (
      <div onClick={this.inc}>
        {this.props.message} {this.state.count}
      </div>
    )
  }
  inc = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }
}

const App = () => (
  <>
    <StatelessApp message="StatelessApp"></StatelessApp>
    <StatefulApp message="hello "></StatefulApp>
  </>
)

export default App
