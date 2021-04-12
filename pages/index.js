import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>Hello, I'm Marios. I'm a software engineer. You can contact me on {' '}
              <a href="https://www.linkedin.com/in/mranag/">Linked In</a>
          </p>
          <p>This is the first attempt in creating a NextJs Website.</p>
        </section>
      </Layout>
  )
}