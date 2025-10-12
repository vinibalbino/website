# Blog CMS

Blog dinâmico usando Notion como CMS.

## Configuração

1. Crie uma integração no [Notion](https://www.notion.so/my-integrations)
2. Copie o arquivo `.env.blog.example` para `.env.local`
3. Configure suas credenciais do Notion
4. Execute `npm run dev`

## Estrutura do Database

Propriedades necessárias no Notion:
- **Title** (Title) - Título do artigo
- **slug** (Rich text) - URL slug único
- **Author** (People) - Autor do artigo
- **Cover** (Files) - Imagem de capa
- **Date** (Date) - Data de publicação
- **Tags** (Multi-select) - Tags do artigo
- **Status** (Status) - Status: "Concluído" para publicar

## Rotas

- `/blog` - Listagem de artigos
- `/blog/[slug]` - Artigo individual
- `/test-notion` - Teste de conexão
