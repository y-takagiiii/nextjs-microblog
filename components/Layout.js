import Head from "next/head";
const name = "Takagi Yuri"
export const siteTitle = "Next.js Blog"

function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <img src="/images/profile.png"></img>
        <h1>{name}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;