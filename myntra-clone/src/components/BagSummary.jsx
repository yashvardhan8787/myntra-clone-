import { useSelector } from "react-redux";

const BagSummary = () => {
  const bagItems = useSelector(state =>state.bag);
  const items = useSelector(state =>state.items);
  const finalItems= items.filter(item=>{
   const itemIndex = bagItems.indexOf(item.id);
   return itemIndex>=0;
  })
  let  totalItem =bagItems.length ;
  let totalMRP=0;
  let totalDiscount=0;
  

  finalItems.forEach((element) => {
    totalMRP += element.current_price ;
    totalDiscount += ((element.current_price / 100 ) * element.discount_percentage);
  });
  let finalPayment= totalMRP - totalDiscount + 99;

  return (
   
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹99</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      
      <button className="btn-place-order">
        <div className="css-xjhrni" onClick={()=>{
          console.log("wants to place the order")
        }}>PLACE ORDER</div>
       
      </button>
      </div>
    
  );
};

export default BagSummary;
