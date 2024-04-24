import React from "react";

export default function OrderStatus({ status }) {
  let className = "alert";
  let icon = "";
  let text = "";
  let cancelBtrue = null;
  let cancelB = <button className="btn btn-sm" onClick={()=>document.getElementById('cancelModal').showModal()}>Cancel</button>; 
  switch (status) {
    case 1:
      className += " alert-primary";
      icon =   <span className="loading loading-spinner loading-xs"></span>;
      text = "Your order is waiting for the waiter's approval."
      cancelBtrue = cancelB;
      break;
      case 2:
        className += " alert-primary";
        icon =   <span className="loading loading-spinner loading-xs"></span>;
        text = "Your order is waiting for the chef's approval."
        cancelBtrue = cancelB;
        break;
    case 3:
      className += " alert-info";
      icon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>;
      text = "Your order is preparing.";
      break;
    case 4:
      className += " alert-success";
      icon =  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
      text = "Your order is ready and will be served soon.";
      break;
    case 5:
        className += " alert-error";
        icon =   <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
        text = "Your order is cancelled due to some issues. Ask the waiter for more information";
      break;    
    default:
        className = "hidden";
        

  }

  return (
    <div className="m-2">
      <div role="alert" className={className}>
        {icon}
        <span>{text}</span>
        <div>
            {cancelBtrue}
        </div>
      </div>

        <dialog id="cancelModal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
            <h3 className="font-bold text-lg">Order Cancellation</h3>
            <p className="py-4">Are you sure you want to cancel?</p>
            <div className="modal-action">
            <form method="dialog" >
            <button className="btn btn-primary mr-2">Cancel</button>
            <button className="btn">Close</button>
            </form>
            </div>
        </div>
        </dialog>
    </div>
  );
}