import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { coresGNV } from "@/constants/temaGNV";
import { nomePerfilGNV, emailPerfilGNV } from "@/constants/avatarGNV";
import { useCarrinhoGNV } from "@/contexts/CarrinhoContextoGNV";
import { useFavoritosGNV } from "@/contexts/FavoritosContextoGNV";
import AvatarGNV from "@/components/AvatarGNV";

export default function TelaPerfilGNV() {
  const routerGNV = useRouter();
  const { totalItensGNV, limparGNV } = useCarrinhoGNV();
  const { idsFavoritosGNV } = useFavoritosGNV();

  function sairGNV() {
    limparGNV();
    routerGNV.replace("/login");
  }

  return (
    <View style={estilosGNV.containerGNV}>
      <TouchableOpacity
        style={estilosGNV.botaoVoltarGNV}
        onPress={() => routerGNV.back()}
      >
        <Feather name="arrow-left" size={22} color={coresGNV.textoGNV} />
      </TouchableOpacity>

      <View style={estilosGNV.cabecalhoGNV}>
        <AvatarGNV tamanhoGNV={110} />
        <Text style={estilosGNV.nomeGNV}>{nomePerfilGNV}</Text>
        <Text style={estilosGNV.emailGNV}>{emailPerfilGNV}</Text>
      </View>

      <View style={estilosGNV.linhaCartoesGNV}>
        <View style={estilosGNV.cartaoGNV}>
          <Feather name="shopping-bag" size={22} color={coresGNV.primariaGNV} />
          <Text style={estilosGNV.valorGNV}>{totalItensGNV}</Text>
          <Text style={estilosGNV.rotuloGNV}>No carrinho</Text>
        </View>
        <View style={estilosGNV.cartaoGNV}>
          <Feather name="heart" size={22} color={coresGNV.destaqueGNV} />
          <Text style={estilosGNV.valorGNV}>{idsFavoritosGNV.length}</Text>
          <Text style={estilosGNV.rotuloGNV}>Favoritos</Text>
        </View>
      </View>

      <TouchableOpacity style={estilosGNV.botaoSairGNV} onPress={sairGNV}>
        <Feather name="log-out" size={20} color={coresGNV.erroGNV} />
        <Text style={estilosGNV.textoSairGNV}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const estilosGNV = StyleSheet.create({
  containerGNV: {
    flex: 1,
    backgroundColor: coresGNV.fundoGNV,
    paddingTop: 56,
    paddingHorizontal: 20,
  },
  botaoVoltarGNV: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: coresGNV.superficieGNV,
    alignItems: "center",
    justifyContent: "center",
  },
  cabecalhoGNV: {
    alignItems: "center",
    marginTop: 12,
    marginBottom: 28,
  },
  nomeGNV: {
    color: coresGNV.textoGNV,
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 14,
  },
  emailGNV: {
    color: coresGNV.textoSuaveGNV,
    fontSize: 15,
    marginTop: 4,
  },
  linhaCartoesGNV: {
    flexDirection: "row",
    gap: 14,
    width: "100%",
    maxWidth: 600,
    alignSelf: "center",
  },
  cartaoGNV: {
    flex: 1,
    backgroundColor: coresGNV.superficieGNV,
    borderWidth: 1,
    borderColor: coresGNV.bordaGNV,
    borderRadius: 18,
    padding: 18,
    alignItems: "center",
    gap: 6,
  },
  valorGNV: {
    color: coresGNV.textoGNV,
    fontSize: 26,
    fontWeight: "bold",
  },
  rotuloGNV: {
    color: coresGNV.textoSuaveGNV,
    fontSize: 13,
  },
  botaoSairGNV: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginTop: 28,
    paddingVertical: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: coresGNV.erroGNV,
    width: "100%",
    maxWidth: 600,
    alignSelf: "center",
  },
  textoSairGNV: {
    color: coresGNV.erroGNV,
    fontSize: 17,
    fontWeight: "bold",
  },
});
