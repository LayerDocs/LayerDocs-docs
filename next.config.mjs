import nextra from 'nextra'

const withNextra = nextra({
})

export default withNextra({
  reactStrictMode: true,
  transpilePackages: ['nextra', 'nextra-theme-docs'],
  experimental: {
    mdxRs: false
  }
})
