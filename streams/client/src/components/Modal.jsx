import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

const DisplayModal = () => {
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
         <div className="modal-dialog" role="document">
            <div className="modal-content">
               <div className="modal-header">
                  <h4 className="modal-title">Delete Stream</h4>
                  <button type="button" className="close" data-dismiss="modal">
                     <span>&times;</span>
                  </button>
               </div>
               <div className="modal-body justify-content-center">
                  <p>Are you sure you want to delete this stream?</p>
               </div>
               <div className="modal-footer">
                  <button type="button" className="btn btn-danger">
                     Delete
                  </button>
                  <button type="button" className="btn btn-secondary">
                     Cancel
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

const Modal = props => {
   return ReactDOM.createPortal(
      <DisplayModal />,
      document.getElementById("modal")
   );
};

export default Modal;
