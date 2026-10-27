import { Feather } from "@expo/vector-icons";

export interface ProdutoGNV {
  idGNV: string;
  nomeGNV: string;
  subtituloGNV: string;
  categoriaGNV: string;
  precoGNV: number;
  avaliacaoGNV: number;
  totalAvaliacoesGNV: number;
  descricaoGNV: string;
  detalhesGNV: string[];
  imagemGNV: string;
  corGNV: string;
  iconeGNV: keyof typeof Feather.glyphMap;
  tamanhosGNV: string[];
}
