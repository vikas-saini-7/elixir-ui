import Sidebar from "@/components/docs/Sidebar";
import React from "react";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-8 flex">
      <Sidebar />
      <main className="w-4/5 p-4">{children}</main>
    </div>
  );
}