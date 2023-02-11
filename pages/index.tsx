import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>EricSchraufnagel.com</title>
        <meta name="description" content="EricSchraufnagel.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div>
          <h1 className="text-3xl font-bold grid place-items-center h-screen">
            Hello, I'm Eric.
          </h1>
        </div>
      </main>
    </>
  )
}
