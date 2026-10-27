import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { coresGNV } from "@/constants/temaGNV";
import { useCarrinhoGNV } from "@/contexts/CarrinhoContextoGNV";

const nomeUsuarioGNV = "Cliente Neowear";
const emailUsuarioGNV = "cliente@loja.com";

export default function TelaPerfilGNV() {
  const routerGNV = useRouter();
  const { totalItensGNV, limparGNV } = useCarrinhoGNV();

  function sairGNV() {
    limparGNV();
    routerGNV.replace("/login");
  }

  return (
    <View style={estilosGNV.containerGNV}>
      <View style={estilosGNV.avatarGNV}>
        <Feather name="user" size={48} color={coresGNV.primariaGNV} />
      </View>

      <Text style={estilosGNV.nomeGNV}>{nomeUsuarioGNV}</Text>
      <Text style={estilosGNV.emailGNV}>{emailUsuarioGNV}</Text>

      <View style={estilosGNV.cartaoGNV}>
        <Feather name="shopping-bag" size={20} color={coresGNV.textoSuaveGNV} />
        <Text style={estilosGNV.textoCartaoGNV}>
          {totalItensGNV === 1
            ? "1 item no carrinho"
            : `${totalItensGNV} itens no carrinho`}
        </Text>
      </View>

      <TouchableOpacity style={estilosGNV.botaoSairGNV} onPress={sairGNV}>
        <Feather name="log-out" size={18} color={coresGNV.erroGNV} />
        <Text style={estilosGNV.textoSairGNV}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const estilosGNV = StyleSheet.create({
  containerGNV: {
    flex: 1,
    backgroundColor: coresGNV.fundoGNV,
    alignItems: "center",
    paddingTop: 80,
    paddingHorizontal: 24,
  },
  avatarGNV: {
    width: 104,
    height: 104,
    borderRadius: 52,
    backgroundColor: coresGNV.superficieGNV,
    borderWidth: 2,
    borderColor: coresGNV.primariaGNV,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  nomeGNV: {
    color: coresGNV.textoGNV,
    fontSize: 22,
    fontWeight: "bold",
  },
  emailGNV: {
    color: coresGNV.textoSuaveGNV,
    fontSize: 15,
    marginTop: 4,
    marginBottom: 32,
  },
  cartaoGNV: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    gap: 12,
    backgroundColor: coresGNV.superficieGNV,
    borderWidth: 1,
    borderColor: coresGNV.bordaGNV,
    borderRadius: 14,
    padding: 16,
  },
  textoCartaoGNV: {
    color: coresGNV.textoGNV,
    fontSize: 16,
  },
  botaoSairGNV: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 32,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: coresGNV.erroGNV,
  },
  textoSairGNV: {
    color: coresGNV.erroGNV,
    fontSize: 16,
    fontWeight: "bold",
  },
});
