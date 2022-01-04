import { Fragment } from "react"
import Headers from "./components/Layout/Header"
import Meals from "./components/Meals/Meals"
function App() {
  return (
    <Fragment>
      <Headers />
      <main>
        <Meals />
      </main>
    </Fragment>
  )
}

export default App
