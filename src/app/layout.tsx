import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'

export const metadata = {
  title: 'LayerDocs Documentation',
  description: 'Professional, high-performance typesetting for the web.',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const pageMap = await getPageMap()
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={<Navbar logo={<b>LayerDocs</b>} />}
          footer={<Footer text={`${new Date().getFullYear()} © LayerDocs`} />}
          pageMap={pageMap}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
