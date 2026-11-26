"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  ANEXO_III,
  ANEXO_V,
  DAS_ANEXO_III,
  DAS_ANEXO_V,
  ECONOMIA_MENSAL,
  FATURAMENTO_MES,
  RBT12,
  ALIQUOTA_EFETIVA_ANEXO_III,
  ALIQUOTA_EFETIVA_ANEXO_V,
  brl,
  pct,
} from "./inteligencia-fiscal-anexos-data"

/**
 * A "Memória de Cálculo" era dois cards de texto genérico. Virou a
 * memória de verdade: as mesmas linhas que um contador confere, lado a
 * lado para os dois anexos, com o mesmo faturamento de exemplo do gráfico
 * acima (nunca diverge, os dois vêm de inteligencia-fiscal-anexos-data).
 */
export function InteligenciaFiscalMemoriaTabela() {
  return (
    <div className="max-w-[640px] mx-auto">
      <Table className="text-sm">
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="text-ink-muted">Parâmetro</TableHead>
            <TableHead className="text-center text-ink-muted">Anexo V</TableHead>
            <TableHead className="text-center font-semibold text-primary">Anexo III</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="text-secondary">Faturamento do mês (exemplo)</TableCell>
            <TableCell colSpan={2} className="text-center font-mono tabular-nums text-secondary">
              {brl.format(FATURAMENTO_MES)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-secondary">RBT12 (últimos 12 meses)</TableCell>
            <TableCell colSpan={2} className="text-center font-mono tabular-nums text-secondary">
              {brl.format(RBT12)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-secondary">Alíquota nominal</TableCell>
            <TableCell className="text-center font-mono tabular-nums">{pct(ANEXO_V.nominal)}</TableCell>
            <TableCell className="text-center font-mono tabular-nums font-semibold text-primary">
              {pct(ANEXO_III.nominal)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-secondary">Parcela a deduzir</TableCell>
            <TableCell className="text-center font-mono tabular-nums">{brl.format(ANEXO_V.parcelaDeduzir)}</TableCell>
            <TableCell className="text-center font-mono tabular-nums font-semibold text-primary">
              {brl.format(ANEXO_III.parcelaDeduzir)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-secondary">Alíquota efetiva</TableCell>
            <TableCell className="text-center font-mono tabular-nums">{pct(ALIQUOTA_EFETIVA_ANEXO_V)}</TableCell>
            <TableCell className="text-center font-mono tabular-nums font-semibold text-primary">
              {pct(ALIQUOTA_EFETIVA_ANEXO_III)}
            </TableCell>
          </TableRow>
          <TableRow className="border-b-0">
            <TableCell className="font-semibold text-secondary">DAS do mês</TableCell>
            <TableCell className="text-center font-mono tabular-nums font-semibold text-secondary">
              {brl.format(DAS_ANEXO_V)}
            </TableCell>
            <TableCell className="text-center font-mono tabular-nums font-semibold text-primary">
              {brl.format(DAS_ANEXO_III)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <div className="mt-4 flex items-center justify-between gap-3 rounded-xl border border-[rgba(55,50,47,0.12)] bg-white px-5 py-4 shadow-xs">
        <span className="text-sm text-secondary">Economia no mês, mesmo faturamento</span>
        <span className="font-mono text-lg font-semibold tabular-nums text-primary">
          {brl.format(ECONOMIA_MENSAL)}
        </span>
      </div>
    </div>
  )
}
