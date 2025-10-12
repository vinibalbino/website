import type { Metadata } from 'next'
import Container from '@/components/Container'

export const metadata: Metadata = {
  title: 'Termos de Serviço',
  description: 'Termos de Serviço para o aplicativo Diaum.',
}

export default function TermsOfServicePage() {
  return (
    <Container className="py-16 lg:py-28">
      {/* LOGO E TÍTULO */}
      <div className="flex flex-col items-start mb-10">
        <span className="text-3xl text-slate-700 font-bold mt-2 ml-1 drop-shadow-sm">
          Termos de Serviço
        </span>
      </div>
      {/* TERMOS ORIGINAIS */}
      <div
        className="prose max-w-7xl prose-slate dark:prose-invert bg-white/90 rounded-xl shadow-lg px-8 py-10
        prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-800 prose-p:leading-relaxed
        prose-h2:mt-8 prose-h2:mb-2 prose-h2:text-lg prose-h2:font-bold prose-h2:text-slate-800
        prose-strong:text-slate-900 prose-strong:font-bold"
      >
        <h1 className="hidden">Termos de Serviço</h1>

        <p>
          <strong>ESTES TERMOS CRIAM UM CONTRATO VINCULATIVO.</strong>
        </p>

        <p>
          Por favor, leia estes Termos de Serviço ("Termos") cuidadosamente porque eles formam um
          contrato entre você e a Diaum app, nossos parceiros, funcionários, diretores,
          patrocinadores e empresas afiliadas ("nós" e "conosco").
        </p>

        <p>
          O aplicativo Diaum é uma solução de hardware e software que desabilita recursos que
          distraem do smartphone do usuário (o "aplicativo Diaum").
        </p>

        <p>
          Ao usar o aplicativo Diaum, você concorda em ficar vinculado a estes Termos. Se você
          estiver usando os Serviços em nome de uma organização, você está concordando com estes
          Termos para essa organização e prometendo que tem autoridade para vincular essa
          organização a estes termos. Ao concordar com estes Termos, você está nos representando que
          tem mais de 13 anos de idade.
        </p>

        <p>
          Você pode usar os Serviços apenas em conformidade com estes Termos e apenas se tiver o
          poder de formar um contrato conosco e não for impedido sob quaisquer leis aplicáveis de
          fazê-lo.
        </p>

        <p>
          <strong>SE VOCÊ NÃO CONCORDAR EM FICAR VINCULADO A ESTES TERMOS,</strong>
        </p>

        <p>
          <strong>VOCÊ NÃO DEVE USAR O SERVIÇO.</strong>
        </p>

        <h2>1. TAXAS</h2>
        <p>
          Cobramos uma taxa pelo aplicativo Diaum. Reservamo-nos o direito, a nosso exclusivo
          critério, de alterar as Taxas a qualquer momento conforme considerarmos apropriado.
        </p>

        <h2>2. ALTERAÇÕES NO SERVIÇO</h2>
        <p>
          Podemos modificar estes termos ou quaisquer termos adicionais que se apliquem ao Serviço.
          Você deve verificar os termos regularmente. Se você não concordar com os termos
          modificados para um Serviço, você deve descontinuar o uso desse Serviço.
        </p>

        <h2>3. ACESSO AOS SERVIÇOS</h2>
        <p>
          Apenas você pode usar os Serviços. Você deve manter sua conta e senhas confidenciais e não
          autorizar terceiros a acessar ou usar o Serviço em seu nome. É sua responsabilidade nos
          contatar imediatamente se sua conta for hackeada, comprometida ou mal utilizada de outra
          forma. Você é responsável por todas as atividades que ocorrem com sua conta. Não seremos
          responsáveis por qualquer perda ou dano decorrente de qualquer uso não autorizado de suas
          contas.
        </p>
        <p>
          Se um terceiro, como um empregador, lhe deu sua conta, essa parte tem direitos sobre sua
          conta e pode: gerenciar sua conta, redefinir sua senha, ou suspender ou cancelar sua
          conta; visualizar os dados de uso e perfil de sua conta, incluindo como e quando sua conta
          é usada; e ler ou armazenar conteúdo em sua conta.
        </p>

        <h2>4. CONSENTIMENTO PARA COMUNICAÇÕES ELETRÔNICAS E SOLICITAÇÃO</h2>
        <p>
          Ao se registrar conosco, você entende que podemos enviar comunicações ou dados sobre os
          Serviços, incluindo mas não limitado a (a) avisos sobre seu uso dos Serviços, e (b)
          informações promocionais e materiais sobre nossos produtos e serviços, via correio
          eletrônico. Damos a você a oportunidade de optar por não receber tais correios eletrônicos
          não obrigatórios de nós seguindo as instruções de cancelamento fornecidas na mensagem.
        </p>
        <p>
          Também podemos enviar a você, em formato eletrônico, avisos obrigatórios sobre o Serviço e
          informações que a lei nos obriga a fornecer. Podemos fornecer informações obrigatórias ou
          exigidas a você por email no endereço que você especificou quando se inscreveu no Serviço.
          Avisos obrigatórios ou exigidos enviados por email serão considerados dados e recebidos
          quando o email for enviado. Você não pode optar por não receber avisos obrigatórios ou
          exigidos. Se você não consentir em receber avisos obrigatórios ou exigidos
          eletronicamente, deve parar de usar o Serviço.
        </p>

        <h2>5. PAGAMENTOS E REEMBOLSOS</h2>
        <p>
          Você deve estar autorizado a usar o método de pagamento que inserir quando criar uma conta
          de cobrança. Você nos autoriza a cobrar de você pelo Serviço usando seu método de
          pagamento e por qualquer recurso pago do Serviço que você escolher se inscrever ou usar
          enquanto estes Termos estiverem em vigor. Podemos iniciar pagamentos (a) antecipadamente;
          (b) no momento da compra; (c) logo após a compra; ou (d) de forma recorrente para Serviços
          de assinatura.
        </p>

        <h2>6. ISENÇÃO DE GARANTIA E LIMITAÇÃO DE RESPONSABILIDADE</h2>
        <p>
          O APLICATIVO DIAUM É FORNECIDO "COMO ESTÁ", POR SUA PRÓPRIA CONTA E RISCO, SEM GARANTIA OU
          CONDIÇÃO EXPRESSA OU IMPLÍCITA DE QUALQUER TIPO. TAMBÉM RENUNCIAMOS A QUAISQUER GARANTIAS
          DE COMERCIALIZAÇÃO, ADEQUAÇÃO PARA UM PROPÓSITO PARTICULAR OU NÃO VIOLAÇÃO.
        </p>
        <p>
          NÃO SOMOS RESPONSÁVEIS POR QUALQUER DANO OU PERDA DE DADOS QUE POSSA RESULTAR DO USO DO
          APLICATIVO DIAUM. RENUNCIAMOS AINDA A QUALQUER GARANTIA DE QUE O CONTEÚDO SERÁ ENTREGUE
          LIVRE DE FALHA TÉCNICA OU DEFEITO OU QUE MONITORAREMOS OU GERENCIAREMOS QUAISQUER DIREITOS
          ASSOCIADOS A QUALQUER CONTEÚDO.
        </p>
        <p>
          EM NENHUM EVENTO SEREMOS NÓS OU NOSSOS PARCEIROS RESPONSÁVEIS POR QUAISQUER DANOS GERAIS,
          DIRETOS, INCIDENTAIS, INDIRETOS, ESPECIAIS, PUNITIVOS OU CONSEQUENCIAIS EM CONEXÃO COM OU
          DECORRENTES DESTE ACORDO, INCLUINDO MAS NÃO LIMITADO A QUALQUER PERDA DE OPORTUNIDADE,
          NEGÓCIOS, LUCRO, RECEITA OU ROYALTIES, INDEPENDENTEMENTE DA CAUSA E SE DECORRENTE DE
          CONTRATO, DELITO, NEGLIGÊNCIA, VIOLAÇÃO OU OUTRA TEORIA DE RESPONSABILIDADE, MESMO QUE NÓS
          OU NOSSOS PARCEIROS TENHAMOS SIDO AVISADOS DA POSSIBILIDADE DE TAL DANO.
        </p>

        <h2>7. ESCOLHA DA LEI, JURISDIÇÃO E FORO, E LIMITAÇÕES</h2>
        <p>
          Este Acordo e sua validade serão regidos e interpretados de acordo com as leis
          substantivas do estado de Wisconsin, EUA, excluindo seus princípios de conflitos de leis.
          Qualquer controvérsia ou reivindicação decorrente ou relacionada a este Acordo, ou
          violação do mesmo, será finalmente resolvida por arbitragem administrada pela Associação
          Americana de Arbitragem de acordo com suas Regras de Arbitragem Comercial, e o julgamento
          sobre a decisão proferida pelo(s) árbitro(s) pode ser registrado em qualquer tribunal com
          jurisdição sobre o mesmo. A sede da arbitragem será a cidade de Madison, Wisconsin, EUA.
        </p>

        <h2>8. ACORDO INTEGRAL</h2>
        <p>
          Estes Termos (incluindo a Política de Privacidade) constituem o acordo integral e
          exclusivo entre você e nós com relação ao Serviço, e substituem e substituem quaisquer
          outros acordos, termos e condições aplicáveis ao Serviço. Estes Termos não criam direitos
          de terceiros beneficiários. Nossa falha em fazer cumprir uma disposição não é uma renúncia
          ao nosso direito de fazê-lo posteriormente.
        </p>

        <h2>9. DIVISIBILIDADE</h2>
        <p>
          Se uma disposição dos Termos for considerada inexequível, as disposições restantes dos
          Termos permanecerão em pleno efeito e um termo executável será substituído refletindo
          nossa intenção o mais próximo possível.
        </p>

        <h2>10. LIBERAÇÃO E COMPROMISSO DE NÃO PROCESSAR</h2>
        <p>
          Na medida máxima permitida por lei, você libera e se compromete a não processar nós,
          nossos parceiros, nossas empresas afiliadas, e nossos respectivos diretores, agentes,
          joint ventures, funcionários, representantes legais e fornecedores de todas e quaisquer
          reivindicações, demandas e danos (reais e consequenciais) de todo tipo e natureza,
          conhecidos e desconhecidos, suspeitos e não suspeitos, divulgados e não divulgados,
          decorrentes ou de qualquer forma conectados com disputas entre você e um organizador de
          evento. Ao entrar nesta liberação, você expressamente renuncia a quaisquer proteções
          (sejam estatutárias ou outras) que de outra forma limitariam a cobertura desta liberação
          para incluir apenas aquelas reivindicações que você pode conhecer ou suspeitar que existam
          em seu favor no momento de concordar com esta liberação.
        </p>

        <h2>11. INDENIZAÇÃO</h2>
        <p>
          Você concorda em nos indenizar e manter nossas subsidiárias, afiliadas e seus respectivos
          diretores, advogados, agentes, funcionários, licenciadores e fornecedores (os
          "Indenizados") isentos de qualquer reivindicação ou demanda e todas as responsabilidades,
          custos e despesas (incluindo honorários advocatícios razoáveis) incorridos por nós e (se
          aplicável) qualquer Indenizado resultante de ou decorrente de sua violação de qualquer
          lei, violação de qualquer representação ou garantia neste acordo, ou violação dos direitos
          de terceiros, incluindo direitos de propriedade intelectual.
        </p>

        <h2>12. PROPRIEDADE INTELECTUAL</h2>
        <p>
          Todas as marcas registradas, direitos autorais, software, conteúdo, know-how, tecnologia
          proprietária e informações, boa vontade e outras propriedades intelectuais criadas,
          desenvolvidas ou licenciadas por nós são nossa propriedade intelectual exclusiva. Nada
          aqui criará qualquer cessão ou licença de nossa propriedade intelectual para você ou
          qualquer terceiro.
        </p>

        <p className="text-sm text-slate-500 mt-8">Data de vigência: 10 de outubro de 2025</p>
      </div>
    </Container>
  )
}
