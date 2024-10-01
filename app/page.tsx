import Image from "next/image";
import Link from "next/link"
import './globals.css'
//import { Inter } from "@next/font/google"

//const iner = Inter({ subsets: ['latin']})

export default function Home() {
  return (
      <main className='main'>
      <h1>Hello se Worldo!!!</h1>
      <Link href={"/about"}>Link to about page</Link>
      </main>
  );
}
