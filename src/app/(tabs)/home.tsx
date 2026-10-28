import AvatarGNV from "@/components/AvatarGNV";
import CartaoProdutoGNV from "@/components/CartaoProdutoGNV";
import { coresGNV } from "@/constants/temaGNV";
import { useCarrinhoGNV } from "@/contexts/CarrinhoContextoGNV";
import { buscarProdutosGNV, categoriasGNV } from "@/data/servidorGNV";
import { ProdutoGNV } from "@/models/ProdutoGNV";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";

type OrdemGNV = "padrao" | "popular" | "menor" | "maior";

interface OpcaoOrdemGNV {
  valorGNV: OrdemGNV;
  textoGNV: string;
  iconeGNV: keyof typeof Feather.glyphMap;
}

const opcoesOrdemGNV: OpcaoOrdemGNV[] = [
  { valorGNV: "popular", textoGNV: "Popularidade", iconeGNV: "trending-up" },
  { valorGNV: "menor", textoGNV: "Menor preço", iconeGNV: "arrow-down" },
  { valorGNV: "maior", textoGNV: "Maior preço", iconeGNV: "arrow-up" },
];

export default function TelaHomeGNV() {
  const routerGNV = useRouter();
  const { adicionarGNV } = useCarrinhoGNV();
  const { width: larguraTelaGNV } = useWindowDimensions();

  const [produtosGNV, setProdutosGNV] = useState<ProdutoGNV[]>([]);
  const [carregandoGNV, setCarregandoGNV] = useState(true);
  const [categoriaAtivaGNV, setCategoriaAtivaGNV] = useState("Todos");
  const [buscaGNV, setBuscaGNV] = useState("");
  const [ordemGNV, setOrdemGNV] = useState<OrdemGNV>("padrao");
  const [menuAbertoGNV, setMenuAbertoGNV] = useState(false);

  let colunasGNV = 2;
  if (larguraTelaGNV >= 1300) {
    colunasGNV = 5;
  } else if (larguraTelaGNV >= 1000) {
    colunasGNV = 4;
  } else if (larguraTelaGNV >= 700) {
    colunasGNV = 3;
  }

  useEffect(() => {
    async function carregarProdutosGNV() {
      const respostaGNV = await buscarProdutosGNV();
      setProdutosGNV(respostaGNV);
      setCarregandoGNV(false);
    }
    carregarProdutosGNV();
  }, []);

  function escolherOrdemGNV(valorGNV: OrdemGNV) {
    setOrdemGNV(valorGNV === ordemGNV ? "padrao" : valorGNV);
    setMenuAbertoGNV(false);
  }

  function adicionarRapidoGNV(produtoGNV: ProdutoGNV) {
    const posicaoMeioGNV = Math.floor(produtoGNV.tamanhosGNV.length / 2);
    const tamanhoPadraoGNV = produtoGNV.tamanhosGNV.includes("M")
      ? "M"
      : produtoGNV.tamanhosGNV[posicaoMeioGNV];
    adicionarGNV(produtoGNV, tamanhoPadraoGNV);
  }

  let produtosFiltradosGNV = produtosGNV.filter((produtoGNV) => {
    const categoriaOkGNV =
      categoriaAtivaGNV === "Todos" ||
      produtoGNV.categoriaGNV === categoriaAtivaGNV;
    const buscaOkGNV = produtoGNV.nomeGNV
      .toLowerCase()
      .includes(buscaGNV.trim().toLowerCase());
    return categoriaOkGNV && buscaOkGNV;
  });

  if (ordemGNV === "menor") {
    produtosFiltradosGNV = [...produtosFiltradosGNV].sort(
      (a, b) => a.precoGNV - b.precoGNV,
    );
  } else if (ordemGNV === "maior") {
    produtosFiltradosGNV = [...produtosFiltradosGNV].sort(
      (a, b) => b.precoGNV - a.precoGNV,
    );
  } else if (ordemGNV === "popular") {
    produtosFiltradosGNV = [...produtosFiltradosGNV].sort(
      (a, b) => b.totalAvaliacoesGNV - a.totalAvaliacoesGNV,
    );
  }

  return (
    <View style={estilosGNV.containerGNV}>
      <View style={estilosGNV.areaUmGNV}>
        <View style={estilosGNV.linhaTopoGNV}>
          <View>
            <Text style={estilosGNV.rotuloLocalGNV}>Entregar em</Text>
            <View style={estilosGNV.linhaLocalGNV}>
              <Feather name="map-pin" size={16} color={coresGNV.primariaGNV} />
              <Text style={estilosGNV.localGNV}>Manaus, AM</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => routerGNV.push("/perfil")}>
            <AvatarGNV tamanhoGNV={46} />
          </TouchableOpacity>
        </View>
        <Text style={estilosGNV.tituloGNV}>Encontre seu look futurista</Text>
      </View>

      <View style={estilosGNV.areaDoisGNV}>
        <View style={estilosGNV.envolveBuscaGNV}>
          <View style={estilosGNV.colunaBuscaGNV}>
            <View style={estilosGNV.linhaBuscaGNV}>
              <View style={estilosGNV.campoBuscaGNV}>
                <Feather
                  name="search"
                  size={18}
                  color={coresGNV.textoSuaveEscuroGNV}
                />
                <TextInput
                  style={estilosGNV.entradaBuscaGNV}
                  placeholder="Buscar produtos"
                  placeholderTextColor={coresGNV.textoSuaveEscuroGNV}
                  value={buscaGNV}
                  onChangeText={setBuscaGNV}
                />
              </View>
              <TouchableOpacity
                style={estilosGNV.botaoFiltroGNV}
                onPress={() => setMenuAbertoGNV(!menuAbertoGNV)}
              >
                <Feather name="sliders" size={20} color={coresGNV.fundoGNV} />
              </TouchableOpacity>
            </View>

            {menuAbertoGNV && (
              <View style={estilosGNV.menuOrdemGNV}>
                {opcoesOrdemGNV.map((opcaoGNV) => {
                  const ativaGNV = opcaoGNV.valorGNV === ordemGNV;
                  return (
                    <TouchableOpacity
                      key={opcaoGNV.valorGNV}
                      style={estilosGNV.itemMenuGNV}
                      onPress={() => escolherOrdemGNV(opcaoGNV.valorGNV)}
                    >
                      <Feather
                        name={opcaoGNV.iconeGNV}
                        size={18}
                        color={
                          ativaGNV
                            ? coresGNV.primariaEscuraGNV
                            : coresGNV.textoSuaveEscuroGNV
                        }
                      />
                      <Text
                        style={[
                          estilosGNV.textoItemMenuGNV,
                          ativaGNV && estilosGNV.textoItemMenuAtivoGNV,
                        ]}
                      >
                        {opcaoGNV.textoGNV}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            )}
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={estilosGNV.listaCategoriasGNV}
          contentContainerStyle={estilosGNV.conteudoCategoriasGNV}
        >
          {categoriasGNV.map((categoriaGNV) => {
            const ativaGNV = categoriaGNV === categoriaAtivaGNV;
            return (
              <TouchableOpacity
                key={categoriaGNV}
                style={[
                  estilosGNV.chipGNV,
                  ativaGNV && estilosGNV.chipAtivoGNV,
                ]}
                onPress={() => setCategoriaAtivaGNV(categoriaGNV)}
              >
                <Text
                  style={[
                    estilosGNV.textoChipGNV,
                    ativaGNV && estilosGNV.textoChipAtivoGNV,
                  ]}
                >
                  {categoriaGNV}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {carregandoGNV ? (
          <View style={estilosGNV.centroGNV}>
            <ActivityIndicator
              size="large"
              color={coresGNV.primariaEscuraGNV}
            />
          </View>
        ) : (
          <FlatList
            key={colunasGNV}
            data={produtosFiltradosGNV}
            keyExtractor={(produtoGNV) => produtoGNV.idGNV}
            numColumns={colunasGNV}
            contentContainerStyle={estilosGNV.conteudoListaGNV}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={
              <Text style={estilosGNV.vazioGNV}>
                Nenhum produto encontrado.
              </Text>
            }
            renderItem={({ item }) => (
              <View style={{ width: `${100 / colunasGNV}%`, padding: 6 }}>
                <CartaoProdutoGNV
                  produtoGNV={item}
                  aoPressionarGNV={() =>
                    routerGNV.push(`/produto/${item.idGNV}`)
                  }
                  aoAdicionarGNV={() => adicionarRapidoGNV(item)}
                />
              </View>
            )}
          />
        )}
      </View>
    </View>
  );
}

const estilosGNV = StyleSheet.create({
  containerGNV: {
    flex: 1,
    backgroundColor: coresGNV.fundoGNV,
  },
  areaUmGNV: {
    backgroundColor: coresGNV.fundoGNV,
    paddingTop: 52,
    paddingHorizontal: 16,
    paddingBottom: 48,
  },
  linhaTopoGNV: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rotuloLocalGNV: {
    color: coresGNV.textoSuaveGNV,
    fontSize: 13,
  },
  linhaLocalGNV: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 2,
  },
  localGNV: {
    color: coresGNV.textoGNV,
    fontSize: 16,
    fontWeight: "bold",
  },
  tituloGNV: {
    color: coresGNV.textoGNV,
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 16,
  },
  areaDoisGNV: {
    flex: 1,
    backgroundColor: coresGNV.brancoGNV,
    paddingTop: 44,
  },
  envolveBuscaGNV: {
    position: "absolute",
    top: -28,
    left: 0,
    right: 0,
    alignItems: "center",
    paddingHorizontal: 16,
    zIndex: 20,
    elevation: 20,
  },
  colunaBuscaGNV: {
    width: "100%",
    maxWidth: 720,
  },
  linhaBuscaGNV: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  campoBuscaGNV: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: coresGNV.brancoGNV,
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 56,
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  entradaBuscaGNV: {
    flex: 1,
    color: coresGNV.textoEscuroGNV,
    fontSize: 15,
  },
  botaoFiltroGNV: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: coresGNV.primariaGNV,
    alignItems: "center",
    justifyContent: "center",
    elevation: 6,
  },
  menuOrdemGNV: {
    position: "absolute",
    top: 64,
    right: 0,
    width: 210,
    backgroundColor: coresGNV.brancoGNV,
    borderRadius: 16,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: coresGNV.bordaClaraGNV,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 12,
  },
  itemMenuGNV: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  textoItemMenuGNV: {
    color: coresGNV.textoEscuroGNV,
    fontSize: 15,
  },
  textoItemMenuAtivoGNV: {
    color: coresGNV.primariaEscuraGNV,
    fontWeight: "bold",
  },
  listaCategoriasGNV: {
    height: 44,
    flexGrow: 0,
    flexShrink: 0,
  },
  conteudoCategoriasGNV: {
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 16,
  },
  chipGNV: {
    height: 40,
    paddingHorizontal: 18,
    borderRadius: 20,
    backgroundColor: coresGNV.fundoChipClaroGNV,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  chipAtivoGNV: {
    backgroundColor: coresGNV.primariaGNV,
  },
  textoChipGNV: {
    color: coresGNV.textoEscuroGNV,
    fontSize: 14,
  },
  textoChipAtivoGNV: {
    color: coresGNV.fundoGNV,
    fontWeight: "bold",
  },
  centroGNV: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  conteudoListaGNV: {
    paddingHorizontal: 10,
    paddingTop: 16,
    paddingBottom: 24,
  },
  vazioGNV: {
    color: coresGNV.textoSuaveEscuroGNV,
    textAlign: "center",
    marginTop: 40,
    fontSize: 15,
  },
});
