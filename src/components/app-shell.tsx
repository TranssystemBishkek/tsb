"use client";
import { ReactNode, useState } from "react";
import { Drawer, DrawerContent, Header } from "./Header";

type Props = {
  children: ReactNode;
};

export const AppShell = ({ children }: Props) => {
  const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);

  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);
  return (
    <>
      <Drawer isOpen={isDrawerOpen} onClose={closeDrawer}>
        <DrawerContent />
      </Drawer>

      <Header toggleHandler={openDrawer} />
      {children}
    </>
  );
};
