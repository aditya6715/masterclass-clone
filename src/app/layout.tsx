// src/app/layout.tsx
import "./globals.css";
import { Toaster } from "react-hot-toast";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UX Design Masterclass",
  description: "Learn top UX skills from industry experts",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}

        {/* ✅ Add this toaster here to show global toast/snackbar notifications */}
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
