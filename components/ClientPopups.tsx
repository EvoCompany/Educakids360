"use client";

import dynamic from "next/dynamic";

const ExitPopup = dynamic(() => import("@/components/ExitPopup"), { ssr: false });
const PurchasePopup = dynamic(() => import("@/components/PurchasePopup"), { ssr: false });

export default function ClientPopups() {
  return (
    <>
      <PurchasePopup />
      <ExitPopup />
    </>
  );
}
