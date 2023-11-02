import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "../../public/logo.svg";

export default function Navbar() {
  const router = useRouter();
  console.log(router);

  return (
    <div className="flex h-16 items-center justify-between border-b-2 border-logotipOrange bg-logotipPurple">
      <div className="flex h-12 w-40 items-center justify-center">
        {router.pathname !== "/" && (
          <button
            className="relative h-10 w-14 rounded-lg bg-logotipOrange px-3 py-2"
            onClick={() => router.back()}
          >
            <Image className="px-2" src="/back.svg" alt="Back" fill></Image>
          </button>
        )}
      </div>
      <div className="relative h-12 w-40">
        <Image src={logo as StaticImageData} alt="Logo" fill />
      </div>
      <div className="h-12 w-40"></div>
    </div>
  );
}
