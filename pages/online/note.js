import Head from "next/head";
import OnlineNote from "@/components/notes/online-note";

function Note() {
  return (
    <>
      <Head>
        <title>Paputea | Lưu ý khi học trực tuyến</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="container">
        <OnlineNote />
      </div>
    </>
  );
}

export default Note;
