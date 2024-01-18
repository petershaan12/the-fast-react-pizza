import { useDispatch } from "react-redux"
import Button from "../../ui/Button"
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({pizzaId, currentQuantity}) {
    const dispatch = useDispatch();
    return (
        <div className="flex gap-2 items-center md:gap-3">
            <Button type="rounded" onClick={()=> dispatch(decreaseItemQuantity(pizzaId))}>-</Button>
            <span className="text-sm font-medium">
                {currentQuantity}
            </span>
            <Button type="rounded" onClick={()=> dispatch(increaseItemQuantity(pizzaId))}>+</Button>
        </div>
    )
}

export default UpdateItemQuantity
