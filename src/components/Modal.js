import React from 'react';

const Modal = (props) => {
    return (
        <div className={props.modalState.visible === true ? "" : "hide"} onClick={()=>{
            props.onHide();
        }}>
            <div className="modal" >
                <div className="modal-container">{props.modalState.msg}</div>
            </div>
        </div>
    );
};

export default Modal;
