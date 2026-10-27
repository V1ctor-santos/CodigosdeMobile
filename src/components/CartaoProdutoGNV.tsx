import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { ProdutoGNV } from "@/models/ProdutoGNV";
import { coresGNV } from "@/constants/temaGNV";
import { formatarPrecoGNV } from "@/utils/formatarPrecoGNV";
import ImagemRemotaGNV from "@/components/ImagemRemotaGNV";

interface CartaoProdutoPropsGNV {
  produtoGNV: ProdutoGNV;
  aoPressionarGNV: () => void;
  aoAdicionarGNV: () => void;
}

export default function CartaoProdutoGNV({
  produtoGNV,
  aoPressionarGNV,
  aoAdicionarGNV,
}: CartaoProdutoPropsGNV) {
  return (
    <TouchableOpacity
      style={estilosGNV.cartaoGNV}
      onPress={aoPressionarGNV}
      activeOpacity={0.85}
    >
      <ImagemRemotaGNV
        uriGNV={produtoGNV.imagemGNV}
        corFundoGNV={produtoGNV.corGNV}
        iconeGNV={produtoGNV.iconeGNV}
        estiloGNV={estilosGNV.imagemGNV}
        tamanhoIconeGNV={48}
      >
        <View style={estilosGNV.notaGNV}>
          <Feather name="star" size={11} color="#FFC107" />
          <Text style={estilosGNV.textoNotaGNV}>
            {produtoGNV.avaliacaoGNV.toFixed(1)}
          </Text>
        </View>
      </ImagemRemotaGNV>

      <Text numberOfLines={1} style={estilosGNV.nomeGNV}>
        {produtoGNV.nomeGNV}
      </Text>
      <Text numberOfLines={1} style={estilosGNV.subtituloGNV}>
        {produtoGNV.subtituloGNV}
      </Text>

      <View style={estilosGNV.rodapeGNV}>
        <Text style={estilosGNV.precoGNV}>
          {formatarPrecoGNV(produtoGNV.precoGNV)}
        </Text>
        <TouchableOpacity
          style={estilosGNV.botaoAdicionarGNV}
          onPress={aoAdicionarGNV}
        >
          <Feather name="plus" size={18} color={coresGNV.fundoGNV} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const estilosGNV = StyleSheet.create({
  cartaoGNV: {
    width: "100%",
    backgroundColor: coresGNV.superficieGNV,
    borderWidth: 1,
    borderColor: coresGNV.bordaGNV,
    borderRadius: 18,
    padding: 8,
  },
  imagemGNV: {
    width: "100%",
    aspectRatio: 3 / 4,
    borderRadius: 14,
    marginBottom: 10,
  },
  notaGNV: {
    position: "absolute",
    top: 8,
    left: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "rgba(10,10,20,0.75)",
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  textoNotaGNV: {
    color: coresGNV.textoGNV,
    fontSize: 11,
    fontWeight: "bold",
  },
  nomeGNV: {
    color: coresGNV.textoGNV,
    fontSize: 15,
    fontWeight: "bold",
    paddingHorizontal: 2,
  },
  subtituloGNV: {
    color: coresGNV.textoSuaveGNV,
    fontSize: 12,
    marginTop: 2,
    paddingHorizontal: 2,
  },
  rodapeGNV: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    paddingHorizontal: 2,
  },
  precoGNV: {
    color: coresGNV.primariaGNV,
    fontSize: 16,
    fontWeight: "bold",
  },
  botaoAdicionarGNV: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: coresGNV.primariaGNV,
    alignItems: "center",
    justifyContent: "center",
  },
});
