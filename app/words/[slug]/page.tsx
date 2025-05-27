import { getAllPostSlugs, getPostBySlug, formatDate } from '@/lib/blog'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="container mx-auto px-4 py-8 max-w-3xl">
      <header className="mb-8">
        <h1 className="text-4xl font-medium mb-4">{post.title}</h1>
        <time className="text-gray-600">
          {formatDate(post.date)}
        </time>
      </header>
      <div className="prose prose-lg max-w-none">
        <MDXRemote source={post.content} />
      </div>
    </article>
  )
} 