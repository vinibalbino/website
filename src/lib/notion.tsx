import { Client } from '@notionhq/client'
import { BlockObjectResponse, PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import React from 'react'
import 'server-only'

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
  notionVersion: '2022-06-28',
})

export const fetchPages = React.cache(async () => {
  if (!process.env.NOTION_TOKEN) {
    throw new Error('NOTION_TOKEN não encontrado nas variáveis de ambiente')
  }
  if (!process.env.NOTION_DATABASE_ID) {
    throw new Error('NOTION_DATABASE_ID não encontrado nas variáveis de ambiente')
  }

  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID!,
    })

    const livePages = response.results.filter((page: any) => {
      const status = getPropertyValue(page.properties, 'Status')
      return status === 'Concluído' || status === null
    })

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

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt?: string
  cover?: string
  author?: string
  authorAvatar?: string
  publishedAt: string
  tags?: string[]
}

export function extractBlogPost(page: PageObjectResponse): BlogPost {
  const properties = page.properties

  const post = {
    id: page.id,
    title: getPropertyValue(properties, 'Title') || 'Sem título',
    slug: getPropertyValue(properties, 'slug') || '',
    excerpt: getPropertyValue(properties, 'excerpt'),
    cover: getPropertyValue(properties, 'Cover') || '',
    author: getPropertyValue(properties, 'Author') || '',
    authorAvatar: getAuthorAvatar(properties, 'Author') || '',
    publishedAt: getPropertyValue(properties, 'Date') || new Date().toISOString(),
    tags: getPropertyValue(properties, 'Tags') || [],
  }

  return post
}

function getAuthorAvatar(properties: any, key: string): string {
  const prop = properties[key]
  if (!prop || prop.type !== 'people' || !prop.people?.[0]) {
    return ''
  }
  
  const person = prop.people[0]
  return person.avatar_url || person.person?.avatar_url || ''
}

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
    case 'people':
      return prop.people?.[0]?.name || ''
    default:
      return null
  }
}
