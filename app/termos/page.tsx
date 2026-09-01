import type { Metadata } from "next"
import Link from "next/link"
import { LegalPage, Section } from "../../components/legal/legal-page"
import { SITE } from "../../lib/site-config"

export const metadata: Metadata = {
  title: "Termos de Uso — Rovee Finance",
  description:
    "Condições de uso do site da Rovee Finance e do canal de contato com consultores. Regras de acesso, propriedade intelectual, limitação de responsabilidade e foro.",
  alternates: { canonical: "/termos" },
  robots: { index: true, follow: true },
}

export default function TermosPage() {
  return (
    <LegalPage
      title="Termos de Uso"
      intro="Estas condições regem o uso deste site e do canal de contato com consultores da Rovee. Ao navegar ou enviar seus dados pelo formulário, você concorda com o que está descrito abaixo."
    >
      <Section title="1. Do que trata este documento">
        <p>
          Este site é um material informativo e um canal de contato comercial da{" "}
          {SITE.legalName} (&quot;Rovee&quot;). Os termos aqui descritos se aplicam à navegação
          no site e ao envio de dados pelo formulário &quot;Falar com Consultor&quot;.
        </p>
        <p>
          A contratação e o uso da plataforma Rovee, quando disponível, são regidos por
          contrato próprio, apresentado e aceito no momento da assinatura. Nada neste site
          substitui esse contrato.
        </p>
      </Section>

      <Section title="2. Natureza das informações publicadas">
        <p>
          Os conteúdos sobre Fator R, Simples Nacional, pró-labore, anexos tributários e
          separação entre pessoa física e jurídica têm caráter informativo e educacional.
        </p>
        <p>
          <strong>A Rovee não presta serviço de contabilidade nem de consultoria tributária
          individualizada por meio deste site.</strong> Nenhum conteúdo aqui publicado
          substitui a análise do seu contador ou advogado sobre o seu caso concreto.
          Decisões fiscais tomadas com base apenas neste material são de responsabilidade
          exclusiva de quem as toma.
        </p>
      </Section>

      <Section title="3. Preços e condições comerciais">
        <p>
          Os valores exibidos na seção de planos são referenciais, expressos em reais e
          válidos para novas contratações enquanto estiverem publicados. Podem ser alterados
          a qualquer momento, sem efeito retroativo sobre contratos já firmados.
        </p>
        <p>
          No plano anual, o valor apresentado por mês é o equivalente mensal de uma cobrança
          única anual, informada junto ao preço. Impostos e eventuais taxas de meio de
          pagamento, quando aplicáveis, são discriminados antes da conclusão da contratação.
        </p>
      </Section>

      <Section title="4. Uso do formulário de contato">
        <p>
          Ao preencher o formulário, você declara que os dados informados são verdadeiros e
          que tem autorização para fornecê-los. O envio direciona a conversa para o WhatsApp
          da Rovee e não gera, por si só, qualquer obrigação de contratação para nenhuma das
          partes.
        </p>
        <p>
          O tratamento dos dados enviados está descrito na{" "}
          <Link href="/privacidade" className="text-primary hover:underline">
            Política de Privacidade
          </Link>
          .
        </p>
      </Section>

      <Section title="5. Uso permitido do site">
        <p>Você concorda em não:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>utilizar o site para fins ilícitos ou que violem direitos de terceiros;</li>
          <li>
            tentar obter acesso não autorizado a sistemas, contas ou dados relacionados à
            Rovee;
          </li>
          <li>
            realizar coleta automatizada em massa, engenharia reversa ou reprodução
            substancial do conteúdo sem autorização por escrito;
          </li>
          <li>enviar dados de terceiros sem que essa pessoa tenha consentido.</li>
        </ul>
      </Section>

      <Section title="6. Propriedade intelectual">
        <p>
          A marca Rovee, o logotipo, os textos, a identidade visual, o código-fonte e os
          materiais deste site pertencem à {SITE.legalName} ou são utilizados sob licença.
          É permitido citar trechos com indicação da fonte; qualquer outro uso depende de
          autorização prévia por escrito.
        </p>
      </Section>

      <Section title="7. Disponibilidade e alterações">
        <p>
          A Rovee busca manter o site disponível e as informações atualizadas, mas não
          garante funcionamento ininterrupto nem ausência de erros. Funcionalidades descritas
          como planejadas ou em roadmap podem ser alteradas, adiadas ou descontinuadas.
        </p>
        <p>
          Estes termos podem ser revisados a qualquer momento. A versão vigente é sempre a
          publicada nesta página, com a data de atualização indicada no topo.
        </p>
      </Section>

      <Section title="8. Limitação de responsabilidade">
        <p>
          Na máxima extensão permitida pela lei aplicável, a Rovee não responde por danos
          indiretos, lucros cessantes ou perdas decorrentes de decisões tomadas com base
          exclusivamente no conteúdo informativo deste site. Nada nesta cláusula afasta
          direitos assegurados ao consumidor pelo Código de Defesa do Consumidor.
        </p>
      </Section>

      <Section title="9. Lei aplicável e foro">
        <p>
          Estes termos são regidos pelas leis brasileiras. Fica eleito o foro do domicílio do
          consumidor para dirimir controvérsias dele decorrentes, nos termos do art. 101, I,
          do Código de Defesa do Consumidor.
        </p>
      </Section>

      <Section title="10. Contato">
        <p>
          Dúvidas sobre estes termos podem ser encaminhadas pelos canais indicados no rodapé
          desta página.
        </p>
      </Section>
    </LegalPage>
  )
}
