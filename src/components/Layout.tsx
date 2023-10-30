import { type ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-logotipPurple min-h-screen">
      <Navbar />
      {children}
      {/* <Footer /> */}
    </div>
  );
}
