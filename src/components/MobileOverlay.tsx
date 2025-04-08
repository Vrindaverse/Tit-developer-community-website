import React, { ReactNode } from "react";
import { createPortal } from "react-dom";

interface MobileOverlayProps {
  children: ReactNode;
  onClick: () => void;
}

const MobileOverlay: React.FC<MobileOverlayProps> = ({ children, onClick }) => {
  const overlayRoot = document.getElementById("overlay-root");
  if (!overlayRoot) return null;

  return createPortal(
    <div
      onClick={onClick}
      className="fixed inset-0 bg-gray-950/90 backdrop-blur-2xl z-50"
    >
      {children}
    </div>,
    overlayRoot
  );
};

export default MobileOverlay;
