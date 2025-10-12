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
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/blog" className="text-blue-600 hover:text-blue-800">
            ← Voltar ao blog
          </Link>
        </nav>

        {/* Header do artigo */}
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

        {/* Conteúdo do artigo */}
        <article className="prose prose-lg max-w-none">
          <NotionRenderer blocks={blocks} />
        </article>
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
