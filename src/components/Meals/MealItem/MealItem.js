import { useContext } from "react"

import MealItemForm from "./MealItemForm"
import styles from "./MealItem.module.css"
import CartContext from "../../../Store/Cart-context"

const MealItem = (props) => {
  const cartCtx = useContext(CartContext)
  const priece = `$${props.price.toFixed(2)}`

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    })
  }
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{priece}</div>
      </div>
      <div></div>
      <MealItemForm onAddToCart={addToCartHandler} />
    </li>
  )
}

export default MealItem
