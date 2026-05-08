import * as React from 'react'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import './globals.css'

export const metadata = {
  title: 'LayerDocs Documentation',
  description: 'The modular documentation engine.',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const pageMap = await getPageMap()
  
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </Head>
      <body className="antialiased">
        <Layout
          navbar={
            <Navbar 
              logo={
                <div className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                  <img src="/logo.png" alt="LayerDocs" width={24} height={24} className="rounded" />
                  <span className="font-bold text-xl tracking-tight text-white">LayerDocs</span>
                </div>
              }
              projectLink="https://github.com/iamgio/layerdocs"
            />
          }
          footer={<Footer className="py-12 border-t border-zinc-800 text-center text-zinc-500">Built with LayerDocs &copy; {new Date().getFullYear()}</Footer>}
          pageMap={pageMap}
          sidebar={{
            defaultMenuCollapseLevel: 1,
            autoCollapse: true,
          }}
          toc={{
            float: true,
            title: "On This Page"
          }}
          nextThemes={{
            defaultTheme: 'dark',
            forcedTheme: 'dark'
          }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
