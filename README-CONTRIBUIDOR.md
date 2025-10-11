# README para Primeiros Colaboradores - Diaum

> **Bem-vindo ao projeto Diaum!** 🎉  
> Este guia foi criado para ajudar novos colaboradores a entenderem rapidamente o projeto, configurarem o ambiente e começarem a contribuir.

---

## 📖 Sobre o Projeto

O **Diaum** é um aplicativo revolucionário que ajuda homens a lutarem contra o vício em pornografia através de bloqueio inteligente. Combinamos técnicas avançadas de psicologia e tecnologia com hardware especializado para acabar de vez com esse vício, oferecendo uma solução completa e eficaz para quem busca liberdade e controle sobre sua vida.

---

## 🛠️ Configurando o Ambiente de Desenvolvimento

### Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js**: Versão 18 ou superior
- **npm**: Versão 8 ou superior (vem junto com o Node.js)
- **Git**: Para clonar e gerenciar o repositório
- **Editor de código**: [VS Code](https://code.visualstudio.com/) é recomendado

### Passos para Configuração

1. **Clone o Repositório**: `git clone https://github.com/Diaum/website.git`
2. **Instale as Dependências**: `npm install`
3. **Execute o Servidor de Desenvolvimento**: `npm run dev`
4. **Visualize o Projeto**: Abra seu navegador em [http://localhost:3000](http://localhost:3000)

---

## 📁 Estrutura Básica do Projeto

```
diaum/
├── src/
│   ├── app/             # Páginas e rotas (Next.js App Router)
│   │   ├── [locale]/    # Páginas da aplicação que são localizadas
│   ├── components/      # Componentes React reutilizáveis
│   ├── locales/         # Textos de localização
│   ├── i18n/            # Configurações da localização como routing e definição de linguagem
│   ├── data/            # Dados e configurações
│   │   ├── siteDetails.ts
│   │   └── ...
├── public/
│   └── images/          # Imagens e assets estáticos
├── package.json
└── README.md
```

### Pastas Principais

- **`/src/app/[locale]`**: Contém as páginas e rotas do site
- **`/src/components`**: Componentes React modulares e reutilizáveis
- **`/src/data`**: Arquivos de configuração e dados do site
- **`/public`**: Assets estáticos (imagens, ícones, etc.)

---

## 📱 Seções do Site

O site Diaum possui as seguintes seções:

- **Hero** - Apresentação principal com título e call-to-action
- **Logos** - Logos de parceiros/clientes
- **Features** - Recursos e benefícios do app
- **Pricing** - Planos e preços
- **Testimonials** - Depoimentos de usuários
- **FAQ** - Perguntas frequentes
- **Statistics** - Estatísticas de impacto
- **CTA** - Call-to-action final
- **Footer** - Rodapé com links importantes

---

## 🤝 Como Contribuir

### Fluxo de Trabalho Básico

1. **Fork o Repositório**
   - Clique em "Fork" no GitHub
   - Clone seu fork localmente

2. **Crie uma Nova Branch**

   ```bash
   git checkout -b feature/nova-secao
   # ou
   git checkout -b fix/problema-estilo
   ```

3. **Desenvolva e Teste**
   - Faça suas alterações
   - Teste localmente com `npm run dev`
   - Certifique-se de que não quebrou funcionalidades existentes

4. **Commit suas Mudanças**

   ```bash
   git add .
   git commit -m "feat: adiciona nova seção de componentes"
   ```

5. **Push para seu Fork**

   ```bash
   git push origin feature/nova-secao
   ```

6. **Abra um Pull Request**
   - Vá até o repositório original no GitHub
   - Clique em "New Pull Request"
   - Descreva claramente suas mudanças

### 💡 Ideias para Contribuições

- **Novos componentes**: Seções de equipe, tabelas de comparação, estudos de caso
- **Variantes de página**: Layouts de agência, eCommerce, portfólio
- **Temas adicionais**: Dark mode, esquemas de cores alternativos
- **Documentação**: Tutoriais, guias, melhorias no README
- **Performance**: Otimizações de carregamento e rendering

### ✅ Diretrizes de Contribuição

- Siga as convenções de código existentes
- Mantenha commits claros e descritivos
- Teste suas mudanças antes de submeter
- Atualize a documentação quando necessário
- Seja respeitoso e construtivo nos comentários

---

## 🚀 Deploy

A forma mais rápida de fazer deploy do Diaum é no [Vercel](https://vercel.com/).

Consulte a [documentação de deploy do Next.js](https://vercel.com/docs/deployments/deployment-methods) para outras opções de deployment.

---

## 💬 Comunidade e Suporte

### Canais de Comunicação

- 🐛 **Reportar Bug**: [GitHub Issues](https://github.com/Diaum/website/issues)
- 💡 **Solicitar Feature**: [GitHub Issues](https://github.com/Diaum/website/issues)
- 💬 **Discussões**: [GitHub Discussions](https://github.com/Diaum/website/discussions)

### Links Úteis

- **Documentação do Next.js**: https://nextjs.org/docs
- **Documentação do Tailwind CSS**: https://tailwindcss.com/docs
- **Documentação do Framer Motion**: https://www.framer.com/motion/
- **React Icons**: https://react-icons.github.io/react-icons/

---

## ❓ Dúvidas Frequentes

### Como faço para rodar os testes?

```bash
npm test
```

### Como faço o build de produção?

```bash
npm run build
```

### Como reporto um bug?

Abra uma issue no GitHub com:

- Descrição clara do problema
- Passos para reproduzir
- Comportamento esperado vs. atual
- Screenshots (se aplicável)
- Informações do ambiente (SO, Node version, etc.)

---

## 📄 Licença

Este projeto é open-source e está disponível sob a **Licença MIT**. Sinta-se livre para usar, modificar e distribuir para projetos pessoais ou comerciais.

---

## 🙏 Agradecimentos

Obrigado por considerar contribuir com o Diaum! Cada contribuição, grande ou pequena, faz diferença e nos ajuda a transformar mais vidas através da tecnologia.

---

<div align="center">
  <p>Feito com ❤️ por <a href="https://github.com/horacio3m">Horacio Mota</a></p>
  <p><strong>Transformando vidas através da tecnologia</strong></p>
</div>
