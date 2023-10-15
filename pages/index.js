import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import utilstyles from "../styles/utils.module.css"
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <section className={utilstyles.headingMd}>
        <p>私は農業系エンジニアです。たまにTypeScript・Next.jsを使ってフロンドエンドのお仕事もします。</p>
      </section>
      <section>
      <h2>📝エンジニアのブログ</h2>
        <div>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" alt="" />
            </Link>
            <Link legacyBehavior href="/">
              <a>SSGとSSRの使い分けの場面はいつなのか？</a>
            </Link>
            <br />
            <small>October 15, 2023</small>
          </article>
        </div>
      </section>
    </Layout>
  )
}
