import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next List</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Hi, I m <i>Sid</i> & this is my first{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </a>{" "}
          project
        </h1>
        <h4 className={styles.description}> I live in Calgary AB, Canada.</h4>

        <Link href="/places">
          <a className={styles.btn}>Visit Calgary</a>
        </Link>
      </main>
    </div>
  );
}
