import { useDispatch, useSelector } from "react-redux";
import { bagactions } from "../store/bagSlice";

const HomeItem=({item})=>{
      

    const bagItems= useSelector(store=>store.bag);
    const dispatch= useDispatch();
    const elementFound = bagItems.indexOf(item.id) >= 0;
    const handelAddToBag=()=>{
      dispatch(bagactions.addToBag(item.id));

    }

    const handelRemoveFromBag=()=>{
        dispatch(bagactions.removeFromBag(item.id));
    }


    return(
        <div className="item-container">
        <img className="item-image" src={item.image} alt="item image"/>
        <div className="rating">
            {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
            <span className="current-price">Rs {item.current_price}</span>
            <span className="original-price">Rs {item.original_price}</span>
            <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
      { !elementFound ?   <button className="btn-add-bag" onClick={handelAddToBag}>Add to Bag</button>
        :<button className="btn-add-bag"  onClick={handelRemoveFromBag}>Remove From bag</button>}
      </div>
    );
}

export default HomeItem;