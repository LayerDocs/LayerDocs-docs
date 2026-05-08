import nextra from 'nextra'

const withNextra = nextra({
  latex: true,
  defaultShowCopyCode: true
})

export default withNextra({
  reactStrictMode: true,
  transpilePackages: ['nextra', 'nextra-theme-docs'],
  experimental: {
    mdxRs: false
  }
})
