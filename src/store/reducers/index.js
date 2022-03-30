import { combineReducers } from "redux";
import { handelDataReducer } from "./itemsReducer";
import { filterReducer } from "./filtersReducer";
import { wishListReducer } from "./WishListReducer";
import { cardItemsReducer } from "./cardReducer";

const rootReducer = combineReducers({
  items: handelDataReducer,
  filterBy: filterReducer,
  wishList: wishListReducer,
  cardItems: cardItemsReducer,
});
export { rootReducer };
