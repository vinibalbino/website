import { notFound } from 'next/navigation'
import Link from 'next/link'
import { fetchBySlug, fetchPageBlocks, extractBlogPost } from '@/lib/notion'
import { NotionRenderer } from '../../../components/NotionRenderer'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const page = await fetchBySlug(params.slug)

  if (!page) {
    notFound()
  }

  const post = extractBlogPost(page)
  const blocks = await fetchPageBlocks(page.id)

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <nav className="mb-8">
          <a
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium cursor-pointer"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Voltar ao blog
          </a>
        </nav>

        {post.cover && (
          <div className="mb-8">
            <img
              src={post.cover}
              alt={post.title}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
        )}

        <header className="mb-12">
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>

          <div className="flex items-center text-gray-600">
            <time className="text-lg">
              {new Date(post.publishedAt).toLocaleDateString('pt-BR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
        </header>

        <article className="prose prose-lg max-w-none">
          <NotionRenderer blocks={blocks} />
        </article>

        {post.author && (
          <div className="mt-12 p-6 bg-gray-50 rounded-lg border-l-4 border-blue-500">
            <div className="flex items-center">
              {post.authorAvatar ? (
                <img
                  src={post.authorAvatar}
                  alt={post.author}
                  className="w-16 h-16 rounded-full mr-6 object-cover"
                />
              ) : (
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6">
                  {post.author.charAt(0).toUpperCase()}
                </div>
              )}
              <div>
                <p className="text-sm text-gray-600 mb-1">Escrito por</p>
                <p className="text-xl font-semibold text-gray-900">{post.author}</p>
                <p className="text-sm text-gray-500 mt-1">
                  Publicado em{' '}
                  {new Date(post.publishedAt).toLocaleDateString('pt-BR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// Gerar metadados para SEO
export async function generateMetadata({ params }: BlogPostPageProps) {
  const page = await fetchBySlug(params.slug)

  if (!page) {
    return {
      title: 'Artigo não encontrado',
    }
  }

  const post = extractBlogPost(page)

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.cover ? [post.cover] : [],
    },
  }
}
