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

// // SSRの場合
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // コンポーネントに渡すためのprops
//     }
//   }
// }

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <section className={utilstyles.headingMd}>
        <p>私は農業系エンジニアです。たまにTypeScript・Next.jsを使ってフロンドエンドのお仕事もします。</p>
      </section>
      <section>
      <h2>📝エンジニアのブログ</h2>
        <div className={styles.grid}>
          {allPostsData.map(({ id, title, date, thumbnail }) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <img
                  src={`${thumbnail}`}
                  alt=""
                  className={styles.thumbnailImage}
                />
              </Link>
              <Link legacyBehavior href={`/posts/${id}`}>
                <a className={utilstyles.boldText}>{title}</a>
              </Link>
              <br />
              <small className={utilstyles.lightText}>{date}</small>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  )
}
