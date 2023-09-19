import React, { FC } from 'react'
//@ts-ignore
import hydrate from 'next-mdx-remote/hydrate'
import matter from 'gray-matter'
import { majorScale, Pane, Heading, Spinner } from 'evergreen-ui'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Post } from '../../types'
import Container from '../../components/container'
import HomeNav from '../../components/homeNav'
import fs from 'fs'
import path from 'path'
import { posts } from '../../content'
import { renderToString } from 'next-mdx-remote/render-to-string'

const BlogPost: FC<Post> = ({ source, frontMatter }) => {
  const content = hydrate(source)
  const router = useRouter()

  if (router.isFallback) {
    return (
      <Pane width="100%" height="100%">
        <Spinner size={48} />
      </Pane>
    )
  }
  return (
    <Pane>
      <Head>
        <title>{`Known Blog | ${frontMatter.title}`}</title>
        <meta name="description" content={frontMatter.summary} />
      </Head>
      <header>
        <HomeNav />
      </header>
      <main>
        <Container>
          <Heading fontSize="clamp(2rem, 8vw, 6rem)" lineHeight="clamp(2rem, 8vw, 6rem)" marginY={majorScale(3)}>
            {frontMatter.title}
          </Heading>
          <Pane>{content}</Pane>
        </Container>
      </main>
    </Pane>
  )
}

BlogPost.defaultProps = {
  source: '',
  frontMatter: { title: 'default title', summary: 'summary', publishedOn: '' },
}

export function getStaticPaths() {
  const postPath = path.join(process.cwd(), 'posts')
  const filenames = fs.readdirSync(postPath)
  const slugs = filenames.map((name) => {
    const filepath = path.join(postPath, name)
    const file = fs.readFileSync(filepath, 'utf-8')
    const { data } = matter(file)
    return data
  })

  return {
    paths: slugs.map((s) => {
      params: {
        slug: s.slug
      }
    }),
    fallback: true, //if you go on a blog that doesnt exist you will get a 404 error through fallback
  }
}

export async function getStaticProps({ params }) {
  let post
  try {
    const filesPath = path.join(process.cwd(), 'posts', params.slug + '.mdx')
    post = fs.readFileSync(filesPath, 'utf-8')
  } catch {
    const cmspost = posts.published.map((p) => {
      const { content, data } = matter(p)
      return data
    })
    const match = cmspost.find((p) => p.slug === params.slug)
  }
  const { data } = matter(post)
  const mdxSource = await renderToString(post, { scope: data })

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  }
}

/**
 * Need to get the paths here
 * then the the correct post for the matching path
 * Posts can come from the fs or our CMS
 */
export default BlogPost
