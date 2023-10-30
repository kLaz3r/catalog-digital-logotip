import Image, { type StaticImageData } from "next/image";
import logo from "../../public/assets/logo.svg";

export default function Navbar() {
  return (
    <div className="bg-logotipGreen flex h-16 items-center justify-center">
      <div className="relative h-12 w-40">
        <Image src={logo as StaticImageData} alt="Logo" fill />
      </div>
    </div>
  );
}
