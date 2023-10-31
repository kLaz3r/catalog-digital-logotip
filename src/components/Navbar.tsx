import Image, { type StaticImageData } from "next/image";
import logo from "../../public/logo.svg";

export default function Navbar() {
  return (
    <div className="flex h-16 items-center justify-center border-b-2 border-logotipOrange bg-logotipPurple">
      <div className="relative h-12 w-40">
        <Image src={logo as StaticImageData} alt="Logo" fill />
      </div>
    </div>
  );
}
