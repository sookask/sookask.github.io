import { getAllPosts, formatDate } from '@/lib/blog'
import Link from 'next/link'
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export default function WordsPage() {
  const posts = getAllPosts()

  return (
    <div className="container px-4 md:px-6 py-12">
		<div className="flex flex-col gap-8 max-w-4xl mx-auto">
			<div className="flex flex-col items-center text-center">
				<h1 className="text-3xl font-normal tracking-tighter sm:text-4xl md:text-5xl mb-4">words.</h1>
				<p className="text-muted-foreground max-w-[700px] mb-8 text-lg">Words I've written.</p>
			</div>
			
			<div className="space-y-8">
				{posts.map((post) => (
				<article key={post.slug} className="border-b pb-8">
					<Link href={`/words/${post.slug}`}>
					<h2 className="text-2xl font-semibold hover:text-blue-600 transition-colors">
						{post.title}
					</h2>
					</Link>
					<time className="text-gray-600 text-sm">
					{formatDate(post.date)}
					</time>
					{post.excerpt && (
					<p className="mt-2 text-gray-700">{post.excerpt}</p>
					)}
				</article>
				))}
			</div>
		</div>
    </div>
  )
} 