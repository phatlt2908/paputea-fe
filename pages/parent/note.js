import Head from "next/head";
import ParentNote from "@/components/notes/parent-note";

function Note() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="container">
        <ParentNote />
      </div>
    </>
  );
}

export default Note;
