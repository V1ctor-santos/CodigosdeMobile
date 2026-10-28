import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { coresGNV } from "@/constants/temaGNV";
import { ProdutoGNV } from "@/models/ProdutoGNV";
import { buscarProdutoPorIdGNV } from "@/data/servidorGNV";
import { useCarrinhoGNV } from "@/contexts/CarrinhoContextoGNV";
import { useFavoritosGNV } from "@/contexts/FavoritosContextoGNV";
import { formatarPrecoGNV } from "@/utils/formatarPrecoGNV";
import ImagemRemotaGNV from "@/components/ImagemRemotaGNV";

export default function TelaDetalhesGNV() {
  const { id: idGNV } = useLocalSearchParams<{ id: string }>();
  const routerGNV = useRouter();
  const { adicionarGNV } = useCarrinhoGNV();
  const { ehFavoritoGNV, alternarFavoritoGNV } = useFavoritosGNV();

  const [produtoGNV, setProdutoGNV] = useState<ProdutoGNV | undefined>(
    undefined,
  );
  const [carregandoGNV, setCarregandoGNV] = useState(true);
  const [tamanhoSelecionadoGNV, setTamanhoSelecionadoGNV] = useState("");
  const [mensagemErroGNV, setMensagemErroGNV] = useState("");
  const [descricaoAbertaGNV, setDescricaoAbertaGNV] = useState(false);

  useEffect(() => {
    async function carregarProdutoGNV() {
      const respostaGNV = await buscarProdutoPorIdGNV(String(idGNV));
      setProdutoGNV(respostaGNV);
      setCarregandoGNV(false);
    }
    carregarProdutoGNV();
  }, [idGNV]);

  function comprarAgoraGNV() {
    if (!produtoGNV) {
      return;
    }
    if (tamanhoSelecionadoGNV === "") {
      setMensagemErroGNV("Escolha um tamanho para continuar.");
      return;
    }
    adicionarGNV(produtoGNV, tamanhoSelecionadoGNV);
    routerGNV.navigate("/carrinho");
  }

  if (carregandoGNV) {
    return (
      <View style={estilosGNV.centroGNV}>
        <ActivityIndicator size="large" color={coresGNV.primariaEscuraGNV} />
      </View>
    );
  }

  if (!produtoGNV) {
    return (
      <View style={estilosGNV.centroGNV}>
        <Text style={estilosGNV.textoSuaveGNV}>Produto não encontrado.</Text>
        <TouchableOpacity onPress={() => routerGNV.back()}>
          <Text style={estilosGNV.linkGNV}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const favoritoGNV = ehFavoritoGNV(produtoGNV.idGNV);

  return (
    <View style={estilosGNV.containerGNV}>
      <ScrollView
        contentContainerStyle={estilosGNV.conteudoGNV}
        showsVerticalScrollIndicator={false}
      >
        <ImagemRemotaGNV
          uriGNV={produtoGNV.imagemGNV}
          corFundoGNV={coresGNV.fundoChipClaroGNV}
          iconeGNV={produtoGNV.iconeGNV}
          estiloGNV={estilosGNV.imagemGNV}
          tamanhoIconeGNV={96}
          modoGNV="contain"
        >
          <TouchableOpacity
            style={estilosGNV.botaoVoltarGNV}
            onPress={() => routerGNV.back()}
          >
            <Feather name="arrow-left" size={22} color={coresGNV.textoGNV} />
          </TouchableOpacity>
          <TouchableOpacity
            style={estilosGNV.botaoFavoritoGNV}
            onPress={() => alternarFavoritoGNV(produtoGNV.idGNV)}
          >
            <Feather
              name="heart"
              size={22}
              color={favoritoGNV ? coresGNV.destaqueGNV : coresGNV.textoGNV}
            />
          </TouchableOpacity>
        </ImagemRemotaGNV>

        <View style={estilosGNV.corpoGNV}>
          <View style={estilosGNV.linhaTituloGNV}>
            <View style={estilosGNV.blocoTituloGNV}>
              <Text style={estilosGNV.categoriaGNV}>
                {produtoGNV.categoriaGNV}
              </Text>
              <Text style={estilosGNV.nomeGNV}>{produtoGNV.nomeGNV}</Text>
              <Text style={estilosGNV.subtituloGNV}>
                {produtoGNV.subtituloGNV}
              </Text>
            </View>
            <View style={estilosGNV.notaGNV}>
              <Feather name="star" size={18} color="#FFC107" />
              <Text style={estilosGNV.valorNotaGNV}>
                {produtoGNV.avaliacaoGNV.toFixed(1)}
              </Text>
              <Text style={estilosGNV.totalNotasGNV}>
                ({produtoGNV.totalAvaliacoesGNV})
              </Text>
            </View>
          </View>

          <View style={estilosGNV.divisorGNV} />

          <Text style={estilosGNV.rotuloGNV}>Descrição</Text>
          <Text
            style={estilosGNV.descricaoGNV}
            numberOfLines={descricaoAbertaGNV ? undefined : 3}
          >
            {produtoGNV.descricaoGNV}
          </Text>
          <TouchableOpacity
            onPress={() => setDescricaoAbertaGNV(!descricaoAbertaGNV)}
          >
            <Text style={estilosGNV.linkGNV}>
              {descricaoAbertaGNV ? "Ler menos" : "Ler mais"}
            </Text>
          </TouchableOpacity>

          <Text style={estilosGNV.rotuloGNV}>Detalhes</Text>
          {produtoGNV.detalhesGNV.map((detalheGNV) => (
            <View key={detalheGNV} style={estilosGNV.linhaDetalheGNV}>
              <Feather
                name="check"
                size={16}
                color={coresGNV.primariaEscuraGNV}
              />
              <Text style={estilosGNV.textoDetalheGNV}>{detalheGNV}</Text>
            </View>
          ))}

          <Text style={estilosGNV.rotuloGNV}>Tamanho</Text>
          <View style={estilosGNV.tamanhosGNV}>
            {produtoGNV.tamanhosGNV.map((tamanhoGNV) => {
              const ativoGNV = tamanhoGNV === tamanhoSelecionadoGNV;
              return (
                <TouchableOpacity
                  key={tamanhoGNV}
                  style={[
                    estilosGNV.tamanhoGNV,
                    ativoGNV && estilosGNV.tamanhoAtivoGNV,
                  ]}
                  onPress={() => {
                    setTamanhoSelecionadoGNV(tamanhoGNV);
                    setMensagemErroGNV("");
                  }}
                >
                  <Text
                    style={[
                      estilosGNV.textoTamanhoGNV,
                      ativoGNV && estilosGNV.textoTamanhoAtivoGNV,
                    ]}
                  >
                    {tamanhoGNV}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {mensagemErroGNV !== "" && (
            <Text style={estilosGNV.erroGNV}>{mensagemErroGNV}</Text>
          )}
        </View>
      </ScrollView>

      <View style={estilosGNV.rodapeGNV}>
        <View>
          <Text style={estilosGNV.rotuloPrecoGNV}>Preço</Text>
          <Text style={estilosGNV.precoGNV}>
            {formatarPrecoGNV(produtoGNV.precoGNV)}
          </Text>
        </View>
        <TouchableOpacity style={estilosGNV.botaoGNV} onPress={comprarAgoraGNV}>
          <Text style={estilosGNV.textoBotaoGNV}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const estilosGNV = StyleSheet.create({
  containerGNV: {
    flex: 1,
    backgroundColor: coresGNV.brancoGNV,
  },
  conteudoGNV: {
    paddingBottom: 24,
  },
  centroGNV: {
    flex: 1,
    backgroundColor: coresGNV.brancoGNV,
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  textoSuaveGNV: {
    color: coresGNV.textoSuaveEscuroGNV,
    fontSize: 16,
  },
  imagemGNV: {
    width: "100%",
    height: 460,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  botaoVoltarGNV: {
    position: "absolute",
    top: 48,
    left: 16,
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "rgba(10,10,20,0.7)",
    alignItems: "center",
    justifyContent: "center",
  },
  botaoFavoritoGNV: {
    position: "absolute",
    top: 48,
    right: 16,
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "rgba(10,10,20,0.7)",
    alignItems: "center",
    justifyContent: "center",
  },
  corpoGNV: {
    padding: 20,
    width: "100%",
    maxWidth: 900,
    alignSelf: "center",
  },
  linhaTituloGNV: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 12,
  },
  blocoTituloGNV: {
    flex: 1,
  },
  categoriaGNV: {
    color: coresGNV.destaqueGNV,
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 4,
  },
  nomeGNV: {
    color: coresGNV.textoEscuroGNV,
    fontSize: 24,
    fontWeight: "bold",
  },
  subtituloGNV: {
    color: coresGNV.textoSuaveEscuroGNV,
    fontSize: 14,
    marginTop: 4,
  },
  notaGNV: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  valorNotaGNV: {
    color: coresGNV.textoEscuroGNV,
    fontSize: 18,
    fontWeight: "bold",
  },
  totalNotasGNV: {
    color: coresGNV.textoSuaveEscuroGNV,
    fontSize: 13,
  },
  divisorGNV: {
    height: 1,
    backgroundColor: coresGNV.bordaClaraGNV,
    marginVertical: 18,
  },
  rotuloGNV: {
    color: coresGNV.textoEscuroGNV,
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 8,
    marginBottom: 8,
  },
  descricaoGNV: {
    color: coresGNV.textoSuaveEscuroGNV,
    fontSize: 15,
    lineHeight: 22,
  },
  linkGNV: {
    color: coresGNV.primariaEscuraGNV,
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 6,
    marginBottom: 12,
  },
  linhaDetalheGNV: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 8,
  },
  textoDetalheGNV: {
    flex: 1,
    color: coresGNV.textoSuaveEscuroGNV,
    fontSize: 14,
  },
  tamanhosGNV: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  tamanhoGNV: {
    minWidth: 60,
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderRadius: 14,
    alignItems: "center",
    backgroundColor: coresGNV.fundoChipClaroGNV,
    borderWidth: 1,
    borderColor: coresGNV.bordaClaraGNV,
  },
  tamanhoAtivoGNV: {
    backgroundColor: coresGNV.primariaGNV,
    borderColor: coresGNV.primariaGNV,
  },
  textoTamanhoGNV: {
    color: coresGNV.textoEscuroGNV,
    fontSize: 16,
  },
  textoTamanhoAtivoGNV: {
    color: coresGNV.fundoGNV,
    fontWeight: "bold",
  },
  erroGNV: {
    color: coresGNV.erroGNV,
    marginTop: 12,
  },
  rodapeGNV: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
    backgroundColor: coresGNV.brancoGNV,
    borderTopWidth: 1,
    borderTopColor: coresGNV.bordaClaraGNV,
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  rotuloPrecoGNV: {
    color: coresGNV.textoSuaveEscuroGNV,
    fontSize: 13,
  },
  precoGNV: {
    color: coresGNV.primariaEscuraGNV,
    fontSize: 22,
    fontWeight: "bold",
  },
  botaoGNV: {
    flex: 1,
    backgroundColor: coresGNV.primariaGNV,
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
  },
  textoBotaoGNV: {
    color: coresGNV.fundoGNV,
    fontSize: 18,
    fontWeight: "bold",
  },
});
