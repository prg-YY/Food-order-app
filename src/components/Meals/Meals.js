import { Fragment } from "react"

import MealsSummary from "./MealsSummary"
import AvailableMeals from "./AvailableMeas"
const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  )
}

export default Meals
