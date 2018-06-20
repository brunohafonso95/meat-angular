import { CartItem } from './item-cart.model'
import { MenuItem } from '../menu-item/menu-item.model';


class ShoppingCartService {
    items: CartItem[] = []

    clear() {
        this.items = []
    }

    total(): number {
        return this.items
            .map(item => item.value())
                .reduce((prev, next) => prev + next, 0);
    }

    addItem(Item: MenuItem) {
        let foundItem = this.items.find((mItem) => mItem.menuItem.id === Item.id)
        if(foundItem) {
            foundItem.quantity = foundItem.quantity++ 
        } else {
            this.items.push(new CartItem(Item))
        }
    }

    removeItem(Item: CartItem) {
        this.items.splice(this.items.indexOf(Item), 1)
    }



}
export { ShoppingCartService } 