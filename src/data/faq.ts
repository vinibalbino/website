import { IFAQ } from '@/types'
import { siteDetails } from './siteDetails'

export const faqs: IFAQ[] = [
  {
    question: `O ${siteDetails.siteName} é seguro?`,
    answer:
      'Absolutamente. Usamos criptografia de nível bancário para proteger seus dados e nunca armazenamos suas informações de login. É por isso que você pode se sentir totalmente seguro para dar o primeiro passo e começar a construir sua vida da forma correta com o Diaum!',
  },
  {
    question: `Posso usar o ${siteDetails.siteName} em múltiplos dispositivos?`,
    answer:
      'Absolutamente. Sua conta do Diaum sincroniza perfeitamente em todos os seus dispositivos - smartphone, tablet e computador. Com isso, você evita qualquer tipo de conteúdo indesejado, mantendo o foco e a atenção nas coisas que realmente fazem sentido, não importa onde você esteja.',
  },
  {
    question: 'Posso bloquear todos os tipos de conteúdo?',
    answer: `Sim! O ${siteDetails.siteName} oferece bloqueio completo de conteúdo inadequado e sites de pornografia. Nosso objetivo é te ajudar a estar presente e tomar as melhores decisões sem ser sabotado!`,
  },
  {
    question: 'Preciso de experiência para usar os recursos de bloqueio?',
    answer:
      'Não! Nossos recursos são intuitivos e fáceis de usar, independentemente do seu nível de experiência. O Diaum é como um cadeado digital simples: você dá apenas alguns toques na tela e pronto! – a porta para conteúdos indesejados está trancada.',
  },
  {
    question: 'E se eu precisar de ajuda usando o app?',
    answer:
      'Nossa equipe de suporte dedicada está disponível 24/7 via chat ou email. Além disso, oferecemos tutoriais extensivos no app para ajudá-lo a aproveitar ao máximo o diaum.',
  },
]
