import React from "react";
import ReactDOM from "react-dom";

const DisplayModal = props => {
   return (
      <div
         className="modal fade show"
         id="deleteModal"
         role="dialog"
         aria-modal="true"
         style={{
            zIndex: "1072",
            display: "block",
            overflowX: "hidden",
            overflowY: "auto"
         }}
      >
         <div
            onClick={evt => evt.stopPropagation()}
            className="modal-dialog"
            role="document"
         >
            <div className="modal-content">
               <div className="modal-header">
                  <h4 className="modal-title">{props.title}</h4>
                  <button type="button" className="close" data-dismiss="modal">
                     <span>&times;</span>
                  </button>
               </div>
               <div className="modal-body justify-content-center">
                  <p>{props.content}</p>
               </div>
               <div className="modal-footer">{props.actions}</div>
            </div>
         </div>
      </div>
   );
};

const Modal = props => {
   return ReactDOM.createPortal(
      <div
         onClick={props.onDismiss}
         className="modal fade show"
         id="deleteModal"
         role="dialog"
         aria-modal="true"
         style={{
            zIndex: "1072",
            display: "block",
            overflowX: "hidden",
            overflowY: "auto"
         }}
      >
         <div
            onClick={evt => evt.stopPropagation()}
            className="modal-dialog"
            role="document"
         >
            <div className="modal-content">
               <div className="modal-header">
                  <h4 className="modal-title">{props.title}</h4>
                  <button type="button" className="close" data-dismiss="modal">
                     <span>&times;</span>
                  </button>
               </div>
               <div className="modal-body justify-content-center">
                  <p>{props.content}</p>
               </div>
               <div className="modal-footer">{props.actions}</div>
            </div>
         </div>
      </div>,
      document.getElementById("modal")
   );
};

export default Modal;
