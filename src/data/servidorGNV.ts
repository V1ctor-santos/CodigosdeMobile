import { ProdutoGNV } from "@/models/ProdutoGNV";
import { fotoPexelsGNV } from "@/constants/imagensGNV";

export const categoriasGNV = [
  "Todos",
  "Jaquetas",
  "Conjuntos",
  "Camisetas",
  "Calças",
  "Calçados",
  "Acessórios",
];

const tamanhosRoupaGNV = ["PP", "P", "M", "G", "GG", "XG"];
const tamanhosCalcadoGNV = [
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
];
const tamanhoUnicoGNV = ["Único"];

const bancoProdutosGNV: ProdutoGNV[] = [
  {
    idGNV: "1",
    nomeGNV: "Jaqueta Neon Rider",
    subtituloGNV: "couro sintético com brilho neon",
    categoriaGNV: "Jaquetas",
    precoGNV: 589.9,
    avaliacaoGNV: 4.8,
    totalAvaliacoesGNV: 1284,
    descricaoGNV:
      "Jaqueta de couro sintético preto com acabamento brilhante que reflete as luzes de neon da cidade. Corte curto e gola firme, inspirada nas ruas cyberpunk. Combina com calça cargo, botas robustas e óculos futuristas.",
    detalhesGNV: [
      "Couro sintético premium com forro macio",
      "Zíper frontal metálico reforçado",
      "Modelagem curta e estruturada",
      "Limpar com pano úmido",
    ],
    imagemGNV: fotoPexelsGNV(8108560),
    corGNV: "#1B2B5E",
    iconeGNV: "wind",
    tamanhosGNV: tamanhosRoupaGNV,
  },
  {
    idGNV: "2",
    nomeGNV: "Jaqueta Visor Noir",
    subtituloGNV: "couro preto estilo cyberpunk",
    categoriaGNV: "Jaquetas",
    precoGNV: 649.9,
    avaliacaoGNV: 4.7,
    totalAvaliacoesGNV: 842,
    descricaoGNV:
      "Jaqueta de couro preto com visual de bar noturno cyberpunk. O caimento marcado valoriza a silhueta e combina com óculos de visor e acessórios metálicos. Uma peça para quem quer ser notado sob qualquer luz.",
    detalhesGNV: [
      "Couro sintético resistente com acabamento liso",
      "Bolsos laterais com zíper",
      "Gola alta e punhos ajustáveis",
      "Evitar contato com superfícies quentes",
    ],
    imagemGNV: fotoPexelsGNV(8107913),
    corGNV: "#2B2B5E",
    iconeGNV: "shield",
    tamanhosGNV: tamanhosRoupaGNV,
  },
  {
    idGNV: "3",
    nomeGNV: "Conjunto Chrome Liquid",
    subtituloGNV: "metalizado de passarela",
    categoriaGNV: "Conjuntos",
    precoGNV: 999.9,
    avaliacaoGNV: 4.9,
    totalAvaliacoesGNV: 642,
    descricaoGNV:
      "Conjunto metalizado com brilho de metal líquido, usado nas passarelas futuristas. Cada movimento reflete a luz e cria um efeito espelhado. Peça de coleção com produção limitada.",
    detalhesGNV: [
      "Tecido metalizado com brilho espelhado",
      "Peça de coleção, produção limitada",
      "Acabamento com costuras reforçadas",
      "Lavar a seco",
    ],
    imagemGNV: fotoPexelsGNV(34346722),
    corGNV: "#3B1B5E",
    iconeGNV: "layers",
    tamanhosGNV: tamanhosRoupaGNV,
  },
  {
    idGNV: "4",
    nomeGNV: "Jaqueta Silver Mirage",
    subtituloGNV: "jaqueta prateada refletiva",
    categoriaGNV: "Conjuntos",
    precoGNV: 849.9,
    avaliacaoGNV: 4.7,
    totalAvaliacoesGNV: 518,
    descricaoGNV:
      "Jaqueta prateada refletiva com visual de ficção científica. Funciona como peça principal do look e combina com calças e acessórios escuros. Feita para quem gosta de ousar.",
    detalhesGNV: [
      "Superfície prateada com efeito refletivo",
      "Forro interno macio",
      "Caimento ajustado ao corpo",
      "Lavar a seco",
    ],
    imagemGNV: fotoPexelsGNV(9150031),
    corGNV: "#1B4A5E",
    iconeGNV: "star",
    tamanhosGNV: tamanhosRoupaGNV,
  },
  {
    idGNV: "5",
    nomeGNV: "Camiseta Neon Drift",
    subtituloGNV: "preta com visual cyberpunk",
    categoriaGNV: "Camisetas",
    precoGNV: 169.9,
    avaliacaoGNV: 4.6,
    totalAvaliacoesGNV: 2310,
    descricaoGNV:
      "Camiseta preta de algodão premium com caimento solto, pensada para o visual noturno. Combina com jaquetas de couro, calças cargo e óculos de visor. Macia, durável e fácil de combinar.",
    detalhesGNV: [
      "100% algodão penteado, 180 g/m²",
      "Gola canelada reforçada",
      "Modelagem solta (relaxed fit)",
      "Pode lavar na máquina com água fria",
    ],
    imagemGNV: fotoPexelsGNV(8108327),
    corGNV: "#0F3B4A",
    iconeGNV: "cpu",
    tamanhosGNV: tamanhosRoupaGNV,
  },
  {
    idGNV: "6",
    nomeGNV: "Camiseta Dark Signal",
    subtituloGNV: "algodão premium sob neon",
    categoriaGNV: "Camisetas",
    precoGNV: 159.9,
    avaliacaoGNV: 4.5,
    totalAvaliacoesGNV: 987,
    descricaoGNV:
      "Camiseta escura de tecido leve que respira bem, ideal para noites sob luzes de neon. Uma base versátil para looks techwear em camadas. Toque macio e costuras reforçadas.",
    detalhesGNV: [
      "Algodão com toque macio",
      "Costura lateral reforçada",
      "Modelagem reta",
      "Pode lavar na máquina com água fria",
    ],
    imagemGNV: fotoPexelsGNV(8108354),
    corGNV: "#5E1B3F",
    iconeGNV: "sun",
    tamanhosGNV: tamanhosRoupaGNV,
  },
  {
    idGNV: "7",
    nomeGNV: "Calça Cargo Neon Grid",
    subtituloGNV: "cargo techwear de corredor neon",
    categoriaGNV: "Calças",
    precoGNV: 349.9,
    avaliacaoGNV: 4.7,
    totalAvaliacoesGNV: 1530,
    descricaoGNV:
      "Calça cargo de estilo techwear com bolsos funcionais e corte largo. Foi pensada para movimento e para o visual de rua futurista. Combina com jaquetas curtas e botas chunky.",
    detalhesGNV: [
      "Tecido resistente com leve elasticidade",
      "Bolsos cargo nas laterais",
      "Corte largo e confortável",
      "Lavar do avesso com água fria",
    ],
    imagemGNV: fotoPexelsGNV(8108301),
    corGNV: "#0F3B4A",
    iconeGNV: "hexagon",
    tamanhosGNV: tamanhosRoupaGNV,
  },
  {
    idGNV: "8",
    nomeGNV: "Calça Tática Void",
    subtituloGNV: "preta com visual cyberpunk",
    categoriaGNV: "Calças",
    precoGNV: 379.9,
    avaliacaoGNV: 4.4,
    totalAvaliacoesGNV: 815,
    descricaoGNV:
      "Calça preta de visual tático, com bolsos amplos e acabamento fosco. Perfeita para compor looks totalmente escuros com detalhes neon. Confortável e resistente para o dia a dia.",
    detalhesGNV: [
      "Sarja resistente com acabamento fosco",
      "Bolsos amplos com fechamento",
      "Cós ajustável",
      "Lavar do avesso com água fria",
    ],
    imagemGNV: fotoPexelsGNV(8107912),
    corGNV: "#4A3B0F",
    iconeGNV: "link",
    tamanhosGNV: tamanhosRoupaGNV,
  },
  {
    idGNV: "9",
    nomeGNV: "Tênis Orbit X",
    subtituloGNV: "bota chunky preto e branco",
    categoriaGNV: "Calçados",
    precoGNV: 599.9,
    avaliacaoGNV: 4.9,
    totalAvaliacoesGNV: 3102,
    descricaoGNV:
      "Calçado preto e branco com solado grosso e amortecido, no estilo chunky futurista. O design robusto dá altura e personalidade ao visual. Fecha com cadarço e tem ótima aderência.",
    detalhesGNV: [
      "Solado de borracha com amortecimento extra",
      "Cabedal sintético de fácil limpeza",
      "Fechamento por cadarço",
      "Limpar com pano úmido",
    ],
    imagemGNV: fotoPexelsGNV(27256441),
    corGNV: "#1B5E4A",
    iconeGNV: "triangle",
    tamanhosGNV: tamanhosCalcadoGNV,
  },
  {
    idGNV: "10",
    nomeGNV: "Bota Tática Titan",
    subtituloGNV: "couro preto com solado robusto",
    categoriaGNV: "Calçados",
    precoGNV: 649.9,
    avaliacaoGNV: 4.6,
    totalAvaliacoesGNV: 1274,
    descricaoGNV:
      "Bota de couro preto com solado robusto e design moderno. Resistente e estruturada, é a escolha certa para completar um look techwear. Combina com calças cargo e jaquetas curtas.",
    detalhesGNV: [
      "Couro legítimo com acabamento fosco",
      "Solado de borracha antiderrapante",
      "Cano médio com fechamento firme",
      "Hidratar o couro de vez em quando",
    ],
    imagemGNV: fotoPexelsGNV(27174564),
    corGNV: "#2B2B5E",
    iconeGNV: "anchor",
    tamanhosGNV: tamanhosCalcadoGNV,
  },
  {
    idGNV: "11",
    nomeGNV: "Óculos Visor Aura",
    subtituloGNV: "lentes futuristas com brilho",
    categoriaGNV: "Acessórios",
    precoGNV: 249.9,
    avaliacaoGNV: 4.5,
    totalAvaliacoesGNV: 2330,
    descricaoGNV:
      "Óculos de lentes escuras e visual de visor, que refletem as luzes ao redor. Armação leve com proteção UV, ótima para completar looks cyberpunk. Acompanha estojo de proteção.",
    detalhesGNV: [
      "Proteção UV400",
      "Armação leve e resistente",
      "Acompanha estojo e flanela",
      "Limpar com flanela macia",
    ],
    imagemGNV: fotoPexelsGNV(7516447),
    corGNV: "#5E3B1B",
    iconeGNV: "eye",
    tamanhosGNV: tamanhoUnicoGNV,
  },
  {
    idGNV: "12",
    nomeGNV: "Óculos Cyber Chrome",
    subtituloGNV: "armação futurista escura",
    categoriaGNV: "Acessórios",
    precoGNV: 289.9,
    avaliacaoGNV: 4.8,
    totalAvaliacoesGNV: 730,
    descricaoGNV:
      "Óculos de sol de armação angular e lentes escuras, com visual marcante de ficção científica. Um acessório que não passa despercebido. Perfeito para looks totalmente pretos.",
    detalhesGNV: [
      "Lentes escuras com proteção UV400",
      "Armação de design futurista",
      "Hastes ajustáveis para melhor encaixe",
      "Acompanha estojo rígido",
    ],
    imagemGNV: fotoPexelsGNV(6940499),
    corGNV: "#1B5E5E",
    iconeGNV: "aperture",
    tamanhosGNV: tamanhoUnicoGNV,
  },
];

function esperarGNV(milissegundosGNV: number): Promise<void> {
  return new Promise((resolverGNV) =>
    setTimeout(resolverGNV, milissegundosGNV),
  );
}

export async function buscarProdutosGNV(): Promise<ProdutoGNV[]> {
  await esperarGNV(600);
  return bancoProdutosGNV;
}

export async function buscarProdutoPorIdGNV(
  idGNV: string,
): Promise<ProdutoGNV | undefined> {
  await esperarGNV(300);
  return bancoProdutosGNV.find((produtoGNV) => produtoGNV.idGNV === idGNV);
}
