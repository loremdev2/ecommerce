"use client"
import React, { useEffect } from 'react'
import { ModeToggle } from "@/components/ThemeProvider/ModeToggle";
import { useStoreModal } from '@/hooks/use-store-modal';

export default function SetupPage() {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) { // If the model is not opened , then open it 
      onOpen();
    }
  }, [isOpen, onOpen]);

  return (
    <div className="relative h-screen">
      <div className="absolute top-4 right-4 flex items-center space-x-4">
        <ModeToggle />
      </div>
      <div className="flex items-center justify-center h-full">
        Root Page
      </div>
    </div>
  );
}
