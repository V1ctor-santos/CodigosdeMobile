import { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { coresGNV } from "@/constants/temaGNV";
import { ProdutoGNV } from "@/models/ProdutoGNV";
import { buscarProdutosGNV } from "@/data/servidorGNV";
import { useCarrinhoGNV } from "@/contexts/CarrinhoContextoGNV";
import { useFavoritosGNV } from "@/contexts/FavoritosContextoGNV";
import CartaoProdutoGNV from "@/components/CartaoProdutoGNV";

export default function TelaFavoritosGNV() {
  const routerGNV = useRouter();
  const { adicionarGNV } = useCarrinhoGNV();
  const { idsFavoritosGNV } = useFavoritosGNV();
  const { width: larguraTelaGNV } = useWindowDimensions();
  const [produtosGNV, setProdutosGNV] = useState<ProdutoGNV[]>([]);

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
    }
    carregarProdutosGNV();
  }, []);

  const favoritosGNV = produtosGNV.filter((produtoGNV) =>
    idsFavoritosGNV.includes(produtoGNV.idGNV),
  );

  function adicionarRapidoGNV(produtoGNV: ProdutoGNV) {
    const posicaoMeioGNV = Math.floor(produtoGNV.tamanhosGNV.length / 2);
    const tamanhoPadraoGNV = produtoGNV.tamanhosGNV.includes("M")
      ? "M"
      : produtoGNV.tamanhosGNV[posicaoMeioGNV];
    adicionarGNV(produtoGNV, tamanhoPadraoGNV);
  }

  return (
    <View style={estilosGNV.containerGNV}>
      <Text style={estilosGNV.tituloGNV}>Favoritos</Text>

      {favoritosGNV.length === 0 ? (
        <View style={estilosGNV.vazioGNV}>
          <Feather name="heart" size={56} color={coresGNV.textoSuaveGNV} />
          <Text style={estilosGNV.textoVazioGNV}>
            Você ainda não favoritou nada.
          </Text>
          <Text style={estilosGNV.subtextoVazioGNV}>
            Toque no coração na tela de um produto para salvar aqui.
          </Text>
        </View>
      ) : (
        <FlatList
          key={colunasGNV}
          data={favoritosGNV}
          keyExtractor={(produtoGNV) => produtoGNV.idGNV}
          numColumns={colunasGNV}
          contentContainerStyle={estilosGNV.conteudoListaGNV}
          showsVerticalScrollIndicator={false}
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
    paddingTop: 56,
  },
  tituloGNV: {
    color: coresGNV.textoGNV,
    fontSize: 26,
    fontWeight: "bold",
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  conteudoListaGNV: {
    paddingHorizontal: 10,
    paddingBottom: 24,
  },
  vazioGNV: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingHorizontal: 32,
  },
  textoVazioGNV: {
    color: coresGNV.textoGNV,
    fontSize: 18,
    fontWeight: "bold",
  },
  subtextoVazioGNV: {
    color: coresGNV.textoSuaveGNV,
    fontSize: 14,
    textAlign: "center",
  },
});
