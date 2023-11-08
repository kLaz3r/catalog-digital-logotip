import { type ReactNode } from "react";
import Navbar from "./Navbar";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-slate-200 text-slate-200">
      <Navbar />
      {children}
      {/* <Footer /> */}
    </div>
  );
}
