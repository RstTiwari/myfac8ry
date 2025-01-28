import { Modal } from "antd";

/**
 * Shows a configurable modal dialog.
 * @param type - The type of modal (e.g., "info", "success", "error", "warning").
 * @param title - The title of the modal.
 * @param content - The content of the modal.
 * @param onOk - Optional callback function for the OK button.
 */
const AlertDialogue = (
    type: "info" | "success" | "error" | "warning",
    title: string,
    content?: string,
    onOk?: () => void
) => {
    Modal[type]({
        title,
        content,
        onOk,
        centered: true,
    });
};

export default AlertDialogue