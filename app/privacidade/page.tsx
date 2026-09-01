import type { Metadata } from "next"
import Link from "next/link"
import { LegalPage, Section } from "../../components/legal/legal-page"
import { SITE } from "../../lib/site-config"

export const metadata: Metadata = {
  title: "Política de Privacidade — Rovee Finance",
  description:
    "Como a Rovee Finance trata os dados pessoais coletados neste site: quais dados, para quê, com que base legal na LGPD, com quem são compartilhados e como exercer seus direitos.",
  alternates: { canonical: "/privacidade" },
  robots: { index: true, follow: true },
}

export default function PrivacidadePage() {
  const contatoEncarregado = SITE.dpoEmail || SITE.email

  return (
    <LegalPage
      title="Política de Privacidade"
      intro="Esta política explica quais dados pessoais são coletados neste site, para que são usados, com que base legal, por quanto tempo são guardados e como você exerce seus direitos previstos na LGPD (Lei nº 13.709/2018)."
    >
      <Section title="1. Quem é o controlador dos dados">
        <p>
          O controlador dos dados pessoais tratados neste site é a {SITE.legalName}
          {SITE.cnpj ? `, inscrita no CNPJ sob o nº ${SITE.cnpj}` : ""}.
        </p>
      </Section>

      <Section title="2. Quais dados são coletados">
        <p>
          <strong>Dados que você informa no formulário &quot;Falar com Consultor&quot;:</strong>{" "}
          nome completo, e-mail, número de WhatsApp, perfil declarado (prestador PJ ou
          escritório contábil) e o assunto de interesse selecionado.
        </p>
        <p>
          <strong>Dados de navegação:</strong> páginas visitadas, origem do acesso, tipo de
          dispositivo, navegador e interações com a página (por exemplo: abrir o formulário,
          chegar até a seção de planos). Esses dados são coletados por ferramentas de
          medição de audiência e, quando ativas, por ferramentas de publicidade, sempre por
          meio de cookies e identificadores similares.
        </p>
        <p>
          <strong>Não coletamos neste site</strong> dados bancários, extratos, documentos
          fiscais, CPF, CNPJ ou qualquer dado sensível. Esse tipo de informação, quando
          necessário, é tratado dentro da plataforma contratada, sob política própria.
        </p>
      </Section>

      <Section title="3. Para que os dados são usados e com que base legal">
        <div className="overflow-x-auto -mx-1">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="text-left border-b border-[rgba(55,50,47,0.16)]">
                <th className="py-2 pr-3 font-semibold text-secondary">Finalidade</th>
                <th className="py-2 pr-3 font-semibold text-secondary">Dados</th>
                <th className="py-2 font-semibold text-secondary">Base legal (LGPD)</th>
              </tr>
            </thead>
            <tbody className="align-top">
              <tr className="border-b border-[rgba(55,50,47,0.08)]">
                <td className="py-2.5 pr-3">
                  Retornar o contato e conduzir a conversa comercial solicitada
                </td>
                <td className="py-2.5 pr-3">Nome, e-mail, WhatsApp, perfil, interesse</td>
                <td className="py-2.5">
                  Art. 7º, V — procedimentos preliminares a pedido do titular
                </td>
              </tr>
              <tr className="border-b border-[rgba(55,50,47,0.08)]">
                <td className="py-2.5 pr-3">
                  Medir audiência e entender como o site é usado, para melhorá-lo
                </td>
                <td className="py-2.5 pr-3">Dados de navegação e interação</td>
                <td className="py-2.5">
                  Art. 7º, IX — legítimo interesse, com avaliação de impacto e possibilidade
                  de oposição
                </td>
              </tr>
              <tr className="border-b border-[rgba(55,50,47,0.08)]">
                <td className="py-2.5 pr-3">
                  Publicidade direcionada e remarketing em plataformas de terceiros
                </td>
                <td className="py-2.5 pr-3">Identificadores de navegação e cookies</td>
                <td className="py-2.5">Art. 7º, I — consentimento, revogável a qualquer momento</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-3">
                  Cumprir obrigações legais e exercer direitos em processos
                </td>
                <td className="py-2.5 pr-3">Dados de contato e registros de acesso</td>
                <td className="py-2.5">Art. 7º, II e VI</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Os dados enviados no formulário <strong>não são usados para disparo de marketing em
          massa</strong> sem que você tenha pedido para receber esse tipo de comunicação.
        </p>
      </Section>

      <Section title="4. Registros de acesso">
        <p>
          Registros de acesso à aplicação são mantidos por 6 meses, conforme o art. 15 do
          Marco Civil da Internet (Lei nº 12.965/2014).
        </p>
      </Section>

      <Section title="5. Com quem os dados são compartilhados">
        <p>
          A Rovee não vende dados pessoais. O compartilhamento se limita a operadores que
          viabilizam o serviço:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            <strong>Provedor de hospedagem</strong> — armazenamento e entrega das páginas.
          </li>
          <li>
            <strong>WhatsApp / Meta Platforms</strong> — ao enviar o formulário, você é
            redirecionado para uma conversa no WhatsApp; a partir daí, o tratamento também
            observa a política do próprio WhatsApp.
          </li>
          <li>
            <strong>Google (Analytics / Tag Manager)</strong> — medição de audiência, quando
            configurado.
          </li>
          <li>
            <strong>Meta (Pixel)</strong> — mensuração e publicidade, quando configurado e
            mediante consentimento.
          </li>
          <li>
            <strong>Autoridades públicas</strong> — apenas mediante requisição legal ou
            ordem judicial.
          </li>
        </ul>
        <p>
          Parte desses operadores está sediada fora do Brasil. As transferências
          internacionais observam os arts. 33 a 36 da LGPD, por meio de cláusulas contratuais
          padrão ou mecanismo equivalente adotado pelo fornecedor.
        </p>
      </Section>

      <Section title="6. Por quanto tempo os dados são guardados">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            <strong>Dados de contato comercial:</strong> até 24 meses após o último contato,
            ou até que você peça a exclusão — o que ocorrer primeiro.
          </li>
          <li>
            <strong>Dados de navegação e analytics:</strong> conforme a retenção configurada
            na ferramenta, em regra até 14 meses.
          </li>
          <li>
            <strong>Registros de acesso:</strong> 6 meses, por obrigação legal.
          </li>
        </ul>
        <p>
          Encerrado o prazo, os dados são eliminados ou anonimizados, ressalvadas as hipóteses
          do art. 16 da LGPD.
        </p>
      </Section>

      <Section title="7. Cookies">
        <p>
          Cookies necessários mantêm o site funcionando e não podem ser desativados. Cookies
          de medição e de publicidade só são acionados quando as respectivas ferramentas
          estão configuradas. Você pode bloquear ou apagar cookies nas configurações do seu
          navegador; isso não impede a navegação, mas pode afetar a medição.
        </p>
      </Section>

      <Section title="8. Segurança">
        <p>
          São adotadas medidas técnicas e administrativas para proteger os dados, incluindo
          tráfego criptografado por HTTPS, cabeçalhos de segurança no servidor e restrição de
          acesso interno às informações de contato. Nenhum sistema é imune a incidentes; caso
          ocorra um incidente com risco relevante, a comunicação à ANPD e aos titulares segue
          o art. 48 da LGPD.
        </p>
      </Section>

      <Section title="9. Seus direitos">
        <p>Como titular, você pode a qualquer momento (art. 18 da LGPD):</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>confirmar se há tratamento e acessar seus dados;</li>
          <li>corrigir dados incompletos, inexatos ou desatualizados;</li>
          <li>
            solicitar anonimização, bloqueio ou eliminação de dados desnecessários ou
            tratados em desconformidade com a lei;
          </li>
          <li>pedir a portabilidade e informações sobre compartilhamento;</li>
          <li>revogar o consentimento e se opor a tratamento fundado em legítimo interesse;</li>
          <li>peticionar perante a ANPD.</li>
        </ul>
        <p>
          Os pedidos são respondidos em até 15 dias. Para exercer qualquer desses direitos,
          use os canais da seção seguinte.
        </p>
      </Section>

      <Section title="10. Encarregado e contato">
        {contatoEncarregado ? (
          <p>
            Encarregado pelo tratamento de dados pessoais (DPO):{" "}
            <a href={`mailto:${contatoEncarregado}`} className="text-primary hover:underline">
              {contatoEncarregado}
            </a>
            .
          </p>
        ) : (
          <p>
            Pedidos relacionados a dados pessoais podem ser feitos pelos canais de contato
            indicados no rodapé desta página, e são encaminhados ao encarregado pelo
            tratamento de dados pessoais da Rovee.
          </p>
        )}
        <p>
          As condições de uso do site estão nos{" "}
          <Link href="/termos" className="text-primary hover:underline">
            Termos de Uso
          </Link>
          .
        </p>
      </Section>

      <Section title="11. Alterações desta política">
        <p>
          Esta política pode ser atualizada para refletir mudanças no site, nas ferramentas
          utilizadas ou na legislação. A versão vigente é sempre a publicada nesta página,
          com a data de atualização indicada no topo.
        </p>
      </Section>
    </LegalPage>
  )
}
