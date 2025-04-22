"use client";
import { useState } from "react";
import { Button } from "./components/ui/Button";
import Modal from "./components/ui/Modal";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="min-h-screen p-10 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Welcome 🎉</h1>

      <Button label="Open Modal" onClick={() => setModalOpen(true)} />

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <h2 className="text-xl font-semibold mb-2">This is a modal</h2>
        <p>Hello from modal 👋</p>
      </Modal>
    </main>
  );
}
