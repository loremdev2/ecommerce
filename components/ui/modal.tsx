"use client";
// This directive ensures the component is rendered on the client-side in a Next.js app.

// Import necessary components from the `shadcn` library to build the modal dialog.
import { Dialog, DialogContent, DialogHeader, DialogDescription, DialogTitle } from "./dialog";

// Define the props expected by the Modal component using an interface.
interface ModalProps {
    title: string;              // The title of the modal dialog.
    description: string;        // A brief description for the modal dialog.
    isOpen: boolean;            // Boolean indicating whether the modal is open or closed.
    onClose: () => void;        // A function to be called when the modal should be closed.
    children: React.ReactNode;  // The content to be displayed inside the modal.
}

// Create the Modal component as a functional React component.
const Modal: React.FC<ModalProps> = ({ title, description, isOpen, onClose, children }) => {

    // This function is triggered when the modal's open/close state changes.
    // It ensures that `onClose` is called when the modal is closed.
    const onChange = (open: boolean) => {
        if (!open) { // If the modal is closed (`open` is false)...
            onClose(); // Call the `onClose` function passed as a prop.
        }
    }

    // The component returns the structure of the modal.
    return (

        // The `open` prop determines if the modal is visible, and `onOpenChange` handles open/close events.
        <Dialog open={isOpen} onOpenChange={onChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
                <div>
                    {children}
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default Modal;
