import React, { FC } from "react";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Drawer: FC<DrawerProps> = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={`fixed inset-0 transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } z-10`}
    >
      <div
        className={`fixed inset-0 bg-black ${
          isOpen ? "opacity-30" : "opacity-0"
        } transition-opacity duration-300 ease-in-out delay-75`}
        onClick={onClose}
      />
      <div className="bg-white max-w-full sm:max-w-1/3 lg:max-w-1/4 w-full h-full shadow-lg p-4 relative">
        <a
          className="absolute top-4 right-4 hamburger-toggle "
          onClick={onClose}
        >
          <span className={"hamburger-btn hamburger-btn--open"} />
        </a>
        {children}
      </div>
    </div>
  );
};
