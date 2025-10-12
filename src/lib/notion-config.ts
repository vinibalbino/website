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

    // Importar o cliente aqui para evitar problemas de inicialização
    const { notion } = await import('./notion')

    const response = await notion.databases.retrieve({
      database_id: process.env.NOTION_DATABASE_ID!,
    })

    console.log('✅ Conexão com Notion estabelecida com sucesso!')
    console.log('Database encontrado:', response.title?.[0]?.plain_text || 'Sem título')

    return true
  } catch (error) {
    console.error('❌ Erro na conexão com Notion:', error)
    return false
  }
}
