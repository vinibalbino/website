import { testNotionConnection } from '@/lib/notion-config'

export default async function TestNotionPage() {
  const isConnected = await testNotionConnection()

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-2xl font-bold mb-4">Teste de Conexão Notion</h1>

        {isConnected ? (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
            ✅ Conexão estabelecida com sucesso!
          </div>
        ) : (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            ❌ Falha na conexão. Verifique suas credenciais.
          </div>
        )}

        <div className="mt-6 text-sm text-gray-600">
          <p>Verifique o console para mais detalhes.</p>
        </div>
      </div>
    </div>
  )
}
