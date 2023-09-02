import React from "react";
import { Modal } from "parsec-swap-uikit";
import SlippageToleranceSetting from "./SlippageToleranceSetting";
import AudioSetting from "./AudioSetting";

type SettingsModalProps = {
  onDismiss?: () => void;
};

// TODO: Fix UI Kit typings
const defaultOnDismiss = () => null;
  
const SettingsModal = ({
  onDismiss = defaultOnDismiss,
}: SettingsModalProps) => { 
  return (
    <Modal title="Settings" onDismiss={onDismiss} style={{background:"#141436"}}>
      <SlippageToleranceSetting />
      {/* <TransactionDeadlineSetting /> */}
      <AudioSetting />
    </Modal>
  );
};

export default SettingsModal;
