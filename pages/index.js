import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import utilstyles from "../styles/utils.module.css"
import styles from "../styles/Home.module.css"
import Link from 'next/link'
import { getPostsData } from '@/lib/post'

const inter = Inter({ subsets: ['latin'] })

// SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostsData();
  console.log(allPostsData);
  return {
    props: {
      allPostsData,
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <section className={utilstyles.headingMd}>
        <p>私は農業系エンジニアです。たまにTypeScript・Next.jsを使ってフロンドエンドのお仕事もします。</p>
      </section>
      <section>
      <h2>📝エンジニアのブログ</h2>
        <div className={styles.grid}>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                alt=""
                className={styles.thumbnailImage}
              />
            </Link>
            <Link legacyBehavior href="/">
              <a className={utilstyles.boldText}>SSGとSSRの使い分けの場面はいつなのか？</a>
            </Link>
            <br />
            <small className={utilstyles.lightText}>October 15, 2023</small>
          </article>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                alt=""
                className={styles.thumbnailImage}
              />
            </Link>
            <Link legacyBehavior href="/">
              <a className={utilstyles.boldText}>SSGとSSRの使い分けの場面はいつなのか？</a>
            </Link>
            <br />
            <small className={utilstyles.lightText}>October 15, 2023</small>
          </article>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                alt=""
                className={styles.thumbnailImage}
              />
            </Link>
            <Link legacyBehavior href="/">
              <a className={utilstyles.boldText}>SSGとSSRの使い分けの場面はいつなのか？</a>
            </Link>
            <br />
            <small className={utilstyles.lightText}>October 15, 2023</small>
          </article>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                alt=""
                className={styles.thumbnailImage}
              />
            </Link>
            <Link legacyBehavior href="/">
              <a className={utilstyles.boldText}>SSGとSSRの使い分けの場面はいつなのか？</a>
            </Link>
            <br />
            <small className={utilstyles.lightText}>October 15, 2023</small>
          </article>
        </div>
      </section>
    </Layout>
  )
}
