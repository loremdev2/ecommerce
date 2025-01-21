import { create } from "zustand";

// Define the structure of the store using an interface.
// This ensures the store follows a specific type structure and improves type safety.
interface useStoreModalInterface {
    isOpen: boolean;       // A state variable to track if the modal is open or not.
    onOpen: () => void;    // A function to open the modal (set isOpen to true).
    onClose: () => void;   // A function to close the modal (set isOpen to false).
}

// Create the Zustand store using the `create` function.
// This function takes a callback that defines the initial state and updater functions.
export const useStoreModal = create<useStoreModalInterface>((set) => ({
    isOpen: false,          // Initial state: the modal is closed (isOpen is false).

    // Define the `onOpen` function that sets `isOpen` to true.
    onOpen: () => set({ isOpen: true }),

    // Define the `onClose` function that sets `isOpen` to false.
    onClose: () => set({ isOpen: false }),
}));
