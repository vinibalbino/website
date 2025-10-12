import { Client } from '@notionhq/client'
import { BlockObjectResponse, PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import React from 'react'
import 'server-only'

// Configuração do cliente Notion com versão da API
export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
  notionVersion: '2022-06-28', // Especificar versão da API
})

export const fetchPages = React.cache(async () => {
  // Validar configuração
  if (!process.env.NOTION_TOKEN) {
    throw new Error('NOTION_TOKEN não encontrado nas variáveis de ambiente')
  }
  if (!process.env.NOTION_DATABASE_ID) {
    throw new Error('NOTION_DATABASE_ID não encontrado nas variáveis de ambiente')
  }

  try {
    // Buscar todas as páginas primeiro
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID!,
    })

    console.log('📊 Total de páginas encontradas:', response.results.length)

    // Filtrar apenas páginas com status "Live" no código (se a propriedade existir)
    const livePages = response.results.filter((page: any) => {
      const status = getPropertyValue(page.properties, 'Status')
      // Por enquanto, mostrar todos os posts independente do status
      return true
    })

    console.log('✅ Páginas filtradas:', livePages.length)

    return {
      ...response,
      results: livePages,
    }
  } catch (error) {
    console.error('Erro ao buscar páginas:', error)
    throw new Error('Falha ao conectar com o Notion. Verifique suas credenciais.')
  }
})

export const fetchBySlug = React.cache(async (slug: string) => {
  // Validar configuração
  if (!process.env.NOTION_TOKEN) {
    throw new Error('NOTION_TOKEN não encontrado nas variáveis de ambiente')
  }
  if (!process.env.NOTION_DATABASE_ID) {
    throw new Error('NOTION_DATABASE_ID não encontrado nas variáveis de ambiente')
  }

  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID!,
      filter: {
        property: 'slug',
        rich_text: {
          equals: slug,
        },
      },
    })
    return response.results[0] as PageObjectResponse | undefined
  } catch (error) {
    console.error('Erro ao buscar página por slug:', error)
    throw new Error('Falha ao buscar artigo. Verifique suas credenciais.')
  }
})

export const fetchPageBlocks = React.cache(async (pageId: string) => {
  // Validar configuração
  if (!process.env.NOTION_TOKEN) {
    throw new Error('NOTION_TOKEN não encontrado nas variáveis de ambiente')
  }

  try {
    const response = await notion.blocks.children.list({
      block_id: pageId,
    })
    return response.results as BlockObjectResponse[]
  } catch (error) {
    console.error('Erro ao buscar blocos da página:', error)
    throw new Error('Falha ao carregar conteúdo do artigo.')
  }
})

// Tipos para o blog
export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt?: string
  cover?: string
  publishedAt: string
  tags?: string[]
}

// Função para extrair propriedades de uma página do Notion
export function extractBlogPost(page: PageObjectResponse): BlogPost {
  const properties = page.properties

  const post = {
    id: page.id,
    title: getPropertyValue(properties, 'Title') || 'Sem título',
    slug: getPropertyValue(properties, 'slug') || '',
    excerpt: getPropertyValue(properties, 'excerpt'),
    cover: getPropertyValue(properties, 'cover'),
    publishedAt: getPropertyValue(properties, 'Date') || page.created_time,
    tags: getPropertyValue(properties, 'Tags') || [],
  }

  return post
}

// Função auxiliar para extrair valores das propriedades
function getPropertyValue(properties: any, key: string): any {
  const prop = properties[key]
  if (!prop) {
    return null
  }

  switch (prop.type) {
    case 'title':
      return prop.title?.[0]?.plain_text || ''
    case 'rich_text':
      return prop.rich_text?.[0]?.plain_text || ''
    case 'select':
      return prop.select?.name || ''
    case 'multi_select':
      return prop.multi_select?.map((item: any) => item.name) || []
    case 'date':
      return prop.date?.start || ''
    case 'files':
      return prop.files?.[0]?.file?.url || prop.files?.[0]?.external?.url || ''
    case 'url':
      return prop.url || ''
    case 'email':
      return prop.email || ''
    case 'phone_number':
      return prop.phone_number || ''
    case 'number':
      return prop.number || 0
    case 'checkbox':
      return prop.checkbox || false
    case 'status':
      return prop.status?.name || ''
    default:
      console.warn(`Tipo de propriedade não suportado: ${prop.type}`)
      return null
  }
}
