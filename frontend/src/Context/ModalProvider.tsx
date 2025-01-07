import React, { createContext, ReactNode, useContext, useState } from "react";
import { Modal } from "antd";

type ModalContextType = {
    showModal: boolean;
    hideModal: () => void;
    children: ReactNode
};

const ModalContext = createContext<ModalContextType | null>(null);

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
};

const ModalProvider = ({ children, hideModal, showModal }: ModalContextType) => {
    return (
        <Modal open={showModal} onCancel={() => hideModal()} footer={null} style={{ padding: 10 }}>
            {children}
        </Modal>
    );
};

export default ModalProvider