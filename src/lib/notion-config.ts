// Validação das variáveis de ambiente
export function validateNotionConfig() {
  if (!process.env.NOTION_TOKEN) {
    throw new Error('NOTION_TOKEN não encontrado nas variáveis de ambiente')
  }

  if (!process.env.NOTION_DATABASE_ID) {
    throw new Error('NOTION_DATABASE_ID não encontrado nas variáveis de ambiente')
  }

  // Validar formato do token (pode começar com 'secret_' ou 'ntn_')
  const token = process.env.NOTION_TOKEN
  if (!token.startsWith('secret_') && !token.startsWith('ntn_')) {
    throw new Error('NOTION_TOKEN deve começar com "secret_" ou "ntn_"')
  }

  // Validar formato do database ID (deve ter 32 caracteres)
  if (process.env.NOTION_DATABASE_ID.length !== 32) {
    throw new Error('NOTION_DATABASE_ID deve ter exatamente 32 caracteres')
  }
}

// Função para testar a conexão
export async function testNotionConnection() {
  try {
    validateNotionConfig()

    const { notion } = await import('./notion')

    await notion.databases.retrieve({
      database_id: process.env.NOTION_DATABASE_ID!,
    })

    return true
  } catch {
    return false
  }
}
