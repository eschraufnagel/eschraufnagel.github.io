import Head from 'next/head';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Image from 'next/image';
import profile from "../public/profile.jpg";
import {useState} from 'react'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div>
      <Head>
        <title>Eric Schraufnagel</title>
        <meta name="description" content="Eric Schraufnagel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="bg-white px-10 md:mt-36 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-rose-600 font-medium md:text-6xl">
              Eric Schraufnagel
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">
              Healthcare Technology Executive
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">
              Hello, I&apos;m <strong>Eric</strong>! Co-Founder &amp; VP of Engineering for a venture-backed company focused on improving the experience for participants in a clinical trial. 
              <br /><br/>
              I love solving problems that patients face while interacting with healthcare systems. 
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a href="https://www.linkedin.com/in/ericschraufnagel/" target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
            <a href="https://github.com/eschraufnagel" target="_blank" rel="noreferrer"><AiFillGithub /></a>
          </div>
          <div className="relative mx-auto w-64 h-64 mt-20 md:72 md:w-72">
            <Image src={profile} alt="Eric Schraufnagel" className="rounded-full" />
          </div>
        </section>
      </main>
    </div>
  )
}
