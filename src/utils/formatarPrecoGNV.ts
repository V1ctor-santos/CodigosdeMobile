export function formatarPrecoGNV(valorGNV: number): string {
  return `R$ ${valorGNV.toFixed(2).replace(".", ",")}`;
}
