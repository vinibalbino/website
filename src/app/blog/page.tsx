import Link from 'next/link'
import Image from 'next/image'
import { fetchPages, extractBlogPost, BlogPost } from '@/lib/notion'
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'

export default async function BlogPage() {
  try {
    const response = await fetchPages()
    const posts = response.results
      .filter((page): page is PageObjectResponse => page.object === 'page')
      .map((page: PageObjectResponse) => extractBlogPost(page))

    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
            <p className="text-xl text-gray-600">
              Artigos e insights sobre tecnologia e desenvolvimento
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map(post => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                {post.cover && (
                  <div className="aspect-video bg-gray-200">
                    <Image src={post.cover} alt={post.title} width={400} height={225} className="w-full h-full object-cover" />
                  </div>
                )}

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags?.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                    {post.title}
                  </h2>

                  {post.excerpt && (
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  )}

                  {post.author && (
                    <div className="mb-4 flex items-center">
                      {post.authorAvatar ? (
                        <Image
                          src={post.authorAvatar}
                          alt={post.author}
                          width={24}
                          height={24}
                          className="w-6 h-6 rounded-full mr-2 object-cover"
                        />
                      ) : (
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs mr-2">
                          {post.author.charAt(0).toUpperCase()}
                        </div>
                      )}
                      <p className="text-sm text-gray-500">
                        Por <span className="font-medium text-gray-700">{post.author}</span>
                      </p>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <time className="text-sm text-gray-500">
                      {new Date(post.publishedAt).toLocaleDateString('pt-BR')}
                    </time>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Ler mais →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">Nenhum artigo encontrado. Volte em breve!</p>
            </div>
          )}
        </div>
      </div>
    )
  } catch {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="max-w-md mx-auto text-center px-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Configuração Necessária</h1>

          <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mb-6">
            <p className="font-semibold">Variáveis de ambiente não configuradas</p>
            <p className="text-sm mt-2">
              Para usar o blog, você precisa configurar as credenciais do Notion.
            </p>
          </div>

          <div className="text-left bg-gray-100 p-4 rounded text-sm">
            <p className="font-semibold mb-2">Crie um arquivo .env.local com:</p>
            <code className="block bg-gray-200 p-2 rounded">
              NOTION_TOKEN=secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
              <br />
              NOTION_DATABASE_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </code>
          </div>

          <div className="mt-6">
            <Link href="/test-notion" className="text-blue-600 hover:text-blue-800 font-medium">
              Testar conexão →
            </Link>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            <p>Consulte o arquivo BLOG-README.md para instruções detalhadas.</p>
          </div>
        </div>
      </div>
    )
  }
}
