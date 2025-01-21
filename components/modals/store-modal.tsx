"use client"

import { useStoreModal } from "@/hooks/use-store-modal"
import Modal from "../ui/modal"


export const StoreModal = () => {
    const storeModal = useStoreModal();

    return (
        <Modal
            isOpen={storeModal.isOpen}
            onClose={storeModal.onClose}
            title="Create Store"
            description="Add a new store to manage products and categories"
        >
            Future Create Store Form
        </Modal>
    )
}