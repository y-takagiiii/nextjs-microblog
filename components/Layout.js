import Head from "next/head";
import styles from "./Layout.module.css"
import utilstyles from "../styles/utils.module.css"
import Link from "next/link";

const name = "Takagi Yuri"
export const siteTitle = "Next.js Blog"

function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
      {home ? (
        <>
          <img
            src="/images/profile.webp"
            className={`${utilstyles.borderCircle} ${styles.headerHomeImage}`}></img>
          <h1 className={utilstyles.heading2xl}>{name}</h1>
        </>
      ) : (
        <>
          <img
            src="/images/profile.webp"
            className={`${utilstyles.borderCircle} ${styles.headerImage}`}></img>
          <h1 className={utilstyles.heading2xl}>{name}</h1>
        </>
      )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">ホームへ戻る</Link>
        </div>
      )}
    </div>
  );
}

export default Layout;