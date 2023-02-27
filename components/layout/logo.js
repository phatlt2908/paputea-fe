import classes from "./logo.module.css";
import Image from "next/image";

function Logo() {
  return <Image src="/logo.png" alt="Logo" width={28} height={28} />;
}

export default Logo;
