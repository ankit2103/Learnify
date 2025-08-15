"use client";

import { Navbar } from "@/components/shared/navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {children}
    </div>
  )
}
