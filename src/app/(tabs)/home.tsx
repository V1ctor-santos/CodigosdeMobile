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

type OrdemGNV = "padrao" | "menor" | "maior";

export default function TelaHomeGNV() {
  const routerGNV = useRouter();
  const { adicionarGNV } = useCarrinhoGNV();
  const { width: larguraTelaGNV } = useWindowDimensions();

  const [produtosGNV, setProdutosGNV] = useState<ProdutoGNV[]>([]);
  const [carregandoGNV, setCarregandoGNV] = useState(true);
  const [categoriaAtivaGNV, setCategoriaAtivaGNV] = useState("Todos");
  const [buscaGNV, setBuscaGNV] = useState("");
  const [ordemGNV, setOrdemGNV] = useState<OrdemGNV>("padrao");

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

  function alternarOrdemGNV() {
    if (ordemGNV === "padrao") {
      setOrdemGNV("menor");
    } else if (ordemGNV === "menor") {
      setOrdemGNV("maior");
    } else {
      setOrdemGNV("padrao");
    }
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
  }

  return (
    <View style={estilosGNV.containerGNV}>
      <View style={estilosGNV.topoGNV}>
        <Text style={estilosGNV.rotuloLocalGNV}>Entregar em</Text>
        <View style={estilosGNV.linhaLocalGNV}>
          <Feather name="map-pin" size={16} color={coresGNV.primariaGNV} />
          <Text style={estilosGNV.localGNV}>Manaus, AM</Text>
        </View>
        <Text style={estilosGNV.tituloGNV}>Encontre seu look futurista</Text>

        <View style={estilosGNV.linhaBuscaGNV}>
          <View style={estilosGNV.campoBuscaGNV}>
            <Feather name="search" size={18} color={coresGNV.textoSuaveGNV} />
            <TextInput
              style={estilosGNV.entradaBuscaGNV}
              placeholder="Buscar produtos"
              placeholderTextColor={coresGNV.textoSuaveGNV}
              value={buscaGNV}
              onChangeText={setBuscaGNV}
            />
          </View>
          <TouchableOpacity
            style={estilosGNV.botaoFiltroGNV}
            onPress={alternarOrdemGNV}
          >
            <Feather name="sliders" size={20} color={coresGNV.fundoGNV} />
          </TouchableOpacity>
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
      </View>

      {carregandoGNV ? (
        <View style={estilosGNV.centroGNV}>
          <ActivityIndicator size="large" color={coresGNV.primariaGNV} />
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
            <Text style={estilosGNV.vazioGNV}>Nenhum produto encontrado.</Text>
          }
          renderItem={({ item }) => (
            <View style={{ width: `${100 / colunasGNV}%`, padding: 6 }}>
              <CartaoProdutoGNV
                produtoGNV={item}
                aoPressionarGNV={() => routerGNV.push(`/produto/${item.idGNV}`)}
                aoAdicionarGNV={() => adicionarRapidoGNV(item)}
              />
            </View>
          )}
        />
      )}
    </View>
  );
}

const estilosGNV = StyleSheet.create({
  containerGNV: {
    flex: 1,
    backgroundColor: coresGNV.fundoGNV,
  },
  topoGNV: {
    paddingTop: 56,
    paddingHorizontal: 16,
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
    marginTop: 14,
    marginBottom: 14,
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
    backgroundColor: coresGNV.campoGNV,
    borderWidth: 1,
    borderColor: coresGNV.bordaGNV,
    borderRadius: 14,
    paddingHorizontal: 14,
    height: 48,
  },
  entradaBuscaGNV: {
    flex: 1,
    color: coresGNV.textoGNV,
    fontSize: 15,
  },
  botaoFiltroGNV: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: coresGNV.primariaGNV,
    alignItems: "center",
    justifyContent: "center",
  },
  listaCategoriasGNV: {
    height: 44,
    flexGrow: 0,
    marginTop: 14,
  },
  conteudoCategoriasGNV: {
    alignItems: "center",
    gap: 10,
    paddingRight: 16,
  },
  chipGNV: {
    height: 40,
    paddingHorizontal: 18,
    borderRadius: 20,
    backgroundColor: coresGNV.superficieGNV,
    borderWidth: 1,
    borderColor: coresGNV.bordaGNV,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  chipAtivoGNV: {
    backgroundColor: coresGNV.primariaGNV,
    borderColor: coresGNV.primariaGNV,
  },
  textoChipGNV: {
    color: coresGNV.textoGNV,
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
    color: coresGNV.textoSuaveGNV,
    textAlign: "center",
    marginTop: 40,
    fontSize: 15,
  },
});
