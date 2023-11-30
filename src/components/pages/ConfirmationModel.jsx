import React from "react";
import "../../assets/style/confirmationModel.css";
import { ENGLISHTEXT } from "../common/englishText";

const ConfirmationModel = ({ onCancel, onConfirm }) => {
  return (
    <div className="confirmation-modal card card-style">
      <div className="modal-content">
        <p className="text-dark">{ENGLISHTEXT.CONFIRMATION_MODEL.CON_MESSAGE}</p>
        <div className="d-flex justify-content-end">
          <button className="btn btn-secondary mr-2" onClick={onCancel}>
            {ENGLISHTEXT.BUTTON.CANCEL}
          </button>
          <button className="btn btn-danger" onClick={onConfirm}>
            {ENGLISHTEXT.BUTTON.CONFIRM}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModel;
