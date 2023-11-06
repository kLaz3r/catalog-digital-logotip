import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "../../public/logo.svg";

function capitalize(word: string) {
  return word[0]?.toUpperCase() + word.slice(1);
}

export default function Navbar() {
  const router = useRouter();
  const words = router.asPath
    .split("/")
    [router.asPath.split("/").length - 1]?.split("-")
    .map((word) => capitalize(word));
  const pageTitle = words?.join(" ");

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
      <div className="flex h-12 w-40 items-center justify-center text-center font-bold">
        {router.pathname === "/" ? "Pagina Principala" : pageTitle}
      </div>
    </div>
  );
}
