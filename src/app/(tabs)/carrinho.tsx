import ImagemRemotaGNV from "@/components/ImagemRemotaGNV";
import { coresGNV } from "@/constants/temaGNV";
import { useCarrinhoGNV } from "@/contexts/CarrinhoContextoGNV";
import { formatarPrecoGNV } from "@/utils/formatarPrecoGNV";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const brancoGNV = "#FFFFFF";
const textoEscuroGNV = "#14142B";
const textoSuaveEscuroGNV = "#6B6B85";
const bordaClaraGNV = "#E4E4EE";
const fundoClaroGNV = "#F0F1F7";
const azulEscuroGNV = "#0090A8";

export default function TelaCarrinhoGNV() {
  const routerGNV = useRouter();
  const {
    itensGNV,
    totalPrecoGNV,
    alterarQuantidadeGNV,
    removerGNV,
    limparGNV,
  } = useCarrinhoGNV();
  const [compraFinalizadaGNV, setCompraFinalizadaGNV] = useState(false);

  function finalizarCompraGNV() {
    limparGNV();
    setCompraFinalizadaGNV(true);
  }

  function continuarComprandoGNV() {
    setCompraFinalizadaGNV(false);
    routerGNV.navigate("/home");
  }

  if (compraFinalizadaGNV) {
    return (
      <View style={estilosGNV.centroGNV}>
        <Feather name="check-circle" size={72} color={azulEscuroGNV} />
        <Text style={estilosGNV.tituloCentroGNV}>Compra realizada!</Text>
        <Text style={estilosGNV.textoCentroGNV}>
          Seu look futurista já está a caminho. Obrigado por comprar na Neowear.
        </Text>
        <TouchableOpacity
          style={estilosGNV.botaoGNV}
          onPress={continuarComprandoGNV}
        >
          <Text style={estilosGNV.textoBotaoGNV}>Continuar comprando</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (itensGNV.length === 0) {
    return (
      <View style={estilosGNV.centroGNV}>
        <Feather name="shopping-bag" size={72} color={textoSuaveEscuroGNV} />
        <Text style={estilosGNV.tituloCentroGNV}>Seu carrinho está vazio</Text>
        <Text style={estilosGNV.textoCentroGNV}>
          Ainda não há nada por aqui. Escolha uma peça na Home e monte o seu
          visual.
        </Text>
        <TouchableOpacity
          style={estilosGNV.botaoGNV}
          onPress={() => routerGNV.navigate("/home")}
        >
          <Text style={estilosGNV.textoBotaoGNV}>Ver coleção</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={estilosGNV.containerGNV}>
      <Text style={estilosGNV.tituloGNV}>Seu carrinho</Text>
      <Text style={estilosGNV.subtituloGNV}>
        Peças escolhidas para o seu futuro
      </Text>

      <FlatList
        data={itensGNV}
        keyExtractor={(itemGNV) => itemGNV.chaveGNV}
        contentContainerStyle={estilosGNV.listaGNV}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: itemGNV }) => (
          <View style={estilosGNV.itemGNV}>
            <ImagemRemotaGNV
              uriGNV={itemGNV.produtoGNV.imagemGNV}
              corFundoGNV={itemGNV.produtoGNV.corGNV}
              iconeGNV={itemGNV.produtoGNV.iconeGNV}
              estiloGNV={estilosGNV.miniaturaGNV}
              tamanhoIconeGNV={28}
            />

            <View style={estilosGNV.infoGNV}>
              <Text numberOfLines={1} style={estilosGNV.nomeGNV}>
                {itemGNV.produtoGNV.nomeGNV}
              </Text>
              <Text style={estilosGNV.textoSuaveGNV}>
                Tamanho {itemGNV.tamanhoGNV}
              </Text>
              <Text style={estilosGNV.precoGNV}>
                {formatarPrecoGNV(
                  itemGNV.produtoGNV.precoGNV * itemGNV.quantidadeGNV,
                )}
              </Text>
            </View>

            <View style={estilosGNV.controlesGNV}>
              <TouchableOpacity
                style={estilosGNV.botaoQuantidadeGNV}
                onPress={() => alterarQuantidadeGNV(itemGNV.chaveGNV, -1)}
              >
                <Feather name="minus" size={16} color={textoEscuroGNV} />
              </TouchableOpacity>
              <Text style={estilosGNV.quantidadeGNV}>
                {itemGNV.quantidadeGNV}
              </Text>
              <TouchableOpacity
                style={estilosGNV.botaoQuantidadeGNV}
                onPress={() => alterarQuantidadeGNV(itemGNV.chaveGNV, 1)}
              >
                <Feather name="plus" size={16} color={textoEscuroGNV} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => removerGNV(itemGNV.chaveGNV)}>
                <Feather name="trash-2" size={20} color={coresGNV.erroGNV} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <View style={estilosGNV.rodapeGNV}>
        <View style={estilosGNV.linhaTotalGNV}>
          <Text style={estilosGNV.textoSuaveGNV}>Total</Text>
          <Text style={estilosGNV.totalGNV}>
            {formatarPrecoGNV(totalPrecoGNV)}
          </Text>
        </View>
        <TouchableOpacity
          style={estilosGNV.botaoGNV}
          onPress={finalizarCompraGNV}
        >
          <Text style={estilosGNV.textoBotaoGNV}>Finalizar compra</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const estilosGNV = StyleSheet.create({
  containerGNV: {
    flex: 1,
    backgroundColor: brancoGNV,
    paddingTop: 56,
    paddingHorizontal: 16,
  },
  centroGNV: {
    flex: 1,
    backgroundColor: brancoGNV,
    alignItems: "center",
    justifyContent: "center",
    padding: 32,
    gap: 10,
  },
  tituloCentroGNV: {
    color: textoEscuroGNV,
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 8,
  },
  textoCentroGNV: {
    color: textoSuaveEscuroGNV,
    fontSize: 15,
    textAlign: "center",
    lineHeight: 22,
  },
  tituloGNV: {
    color: textoEscuroGNV,
    fontSize: 26,
    fontWeight: "bold",
  },
  subtituloGNV: {
    color: textoSuaveEscuroGNV,
    fontSize: 14,
    marginTop: 2,
    marginBottom: 16,
  },
  textoSuaveGNV: {
    color: textoSuaveEscuroGNV,
    fontSize: 14,
  },
  listaGNV: {
    gap: 12,
    paddingBottom: 16,
  },
  itemGNV: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: brancoGNV,
    borderWidth: 1,
    borderColor: bordaClaraGNV,
    borderRadius: 16,
    padding: 10,
    gap: 12,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  miniaturaGNV: {
    width: 76,
    height: 90,
    borderRadius: 12,
  },
  infoGNV: {
    flex: 1,
    gap: 2,
  },
  nomeGNV: {
    color: textoEscuroGNV,
    fontSize: 15,
    fontWeight: "bold",
  },
  precoGNV: {
    color: azulEscuroGNV,
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 4,
  },
  controlesGNV: {
    alignItems: "center",
    gap: 8,
  },
  botaoQuantidadeGNV: {
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: fundoClaroGNV,
    alignItems: "center",
    justifyContent: "center",
  },
  quantidadeGNV: {
    color: textoEscuroGNV,
    fontSize: 16,
    fontWeight: "bold",
  },
  rodapeGNV: {
    paddingVertical: 16,
    gap: 12,
  },
  linhaTotalGNV: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  totalGNV: {
    color: textoEscuroGNV,
    fontSize: 22,
    fontWeight: "bold",
  },
  botaoGNV: {
    backgroundColor: coresGNV.primariaGNV,
    paddingVertical: 15,
    paddingHorizontal: 32,
    borderRadius: 16,
    alignItems: "center",
    marginTop: 8,
  },
  textoBotaoGNV: {
    color: coresGNV.fundoGNV,
    fontSize: 17,
    fontWeight: "bold",
  },
});
