"use client"
import { StoreModal } from "@/components/modals/store-modal";
import { useState, useEffect } from "react";

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true)
    }, []);

    if (!isMounted) return null; // If its not mounted, return null
    return (
        <StoreModal />
    )
}

export default ModalProvider;