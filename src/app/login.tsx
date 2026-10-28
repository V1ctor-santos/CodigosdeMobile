import { fotoLoginGNV } from "@/constants/imagensGNV";
import { coresGNV } from "@/constants/temaGNV";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const emailCadastradoGNV = "cliente@loja.com";
const senhaCadastradaGNV = "123456";

export default function TelaLoginGNV() {
  const routerGNV = useRouter();
  const [emailGNV, setEmailGNV] = useState("");
  const [senhaGNV, setSenhaGNV] = useState("");
  const [mensagemErroGNV, setMensagemErroGNV] = useState("");

  function verificarLoginGNV() {
    if (emailGNV.trim() === "" || senhaGNV === "") {
      setMensagemErroGNV("Preencha o e-mail e a senha para entrar.");
      return;
    }
    if (emailGNV.trim().toLowerCase() !== emailCadastradoGNV) {
      setMensagemErroGNV("E-mail incorreto. Confira e tente de novo.");
      return;
    }
    if (senhaGNV !== senhaCadastradaGNV) {
      setMensagemErroGNV("Senha incorreta. Confira e tente de novo.");
      return;
    }
    setMensagemErroGNV("");
    routerGNV.replace("/home");
  }

  return (
    <ScrollView
      style={estilosGNV.containerGNV}
      contentContainerStyle={estilosGNV.conteudoGNV}
      keyboardShouldPersistTaps="handled"
    >
      <ImageBackground
        source={{ uri: fotoLoginGNV }}
        style={estilosGNV.fotoGNV}
        resizeMode="cover"
      >
        <View style={estilosGNV.peliculaGNV} />
        <Text style={estilosGNV.marcaGNV}>NEOWEAR</Text>
      </ImageBackground>

      <View style={estilosGNV.formularioGNV}>
        <Text style={estilosGNV.tituloGNV}>Bem-vindo de volta</Text>
        <Text style={estilosGNV.subtituloGNV}>
          Entre para ver as novidades da coleção.
        </Text>

        <View style={estilosGNV.campoGNV}>
          <Feather name="mail" size={20} color={coresGNV.primariaGNV} />
          <TextInput
            style={estilosGNV.inputGNV}
            placeholder="Email"
            placeholderTextColor={coresGNV.textoSuaveGNV}
            keyboardType="email-address"
            autoCapitalize="none"
            value={emailGNV}
            onChangeText={setEmailGNV}
          />
        </View>

        <View style={estilosGNV.campoGNV}>
          <Feather name="lock" size={20} color={coresGNV.primariaGNV} />
          <TextInput
            style={estilosGNV.inputGNV}
            placeholder="Senha"
            placeholderTextColor={coresGNV.textoSuaveGNV}
            secureTextEntry
            value={senhaGNV}
            onChangeText={setSenhaGNV}
          />
        </View>

        {mensagemErroGNV !== "" && (
          <Text style={estilosGNV.erroGNV}>{mensagemErroGNV}</Text>
        )}

        <TouchableOpacity
          style={estilosGNV.botaoGNV}
          onPress={verificarLoginGNV}
        >
          <Text style={estilosGNV.textoBotaoGNV}>Entrar</Text>
        </TouchableOpacity>

        <Text style={estilosGNV.dicaGNV}>
          Acesso de demonstração: cliente@loja.com · 123456
        </Text>
      </View>
    </ScrollView>
  );
}

const estilosGNV = StyleSheet.create({
  containerGNV: {
    flex: 1,
    backgroundColor: coresGNV.fundoGNV,
  },
  conteudoGNV: {
    flexGrow: 1,
  },
  fotoGNV: {
    height: 300,
    backgroundColor: coresGNV.superficieGNV,
    justifyContent: "flex-start",
    padding: 24,
    paddingTop: 56,
  },
  peliculaGNV: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "rgba(10,10,20,0.35)",
  },
  marcaGNV: {
    color: coresGNV.primariaGNV,
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 6,
  },
  formularioGNV: {
    flex: 1,
    backgroundColor: coresGNV.fundoGNV,
    marginTop: -28,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    padding: 24,
  },
  tituloGNV: {
    color: coresGNV.textoGNV,
    fontSize: 28,
    fontWeight: "bold",
  },
  subtituloGNV: {
    color: coresGNV.textoSuaveGNV,
    fontSize: 15,
    marginTop: 4,
    marginBottom: 24,
  },
  campoGNV: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: coresGNV.campoGNV,
    borderWidth: 1,
    borderColor: coresGNV.bordaGNV,
    borderRadius: 16,
    paddingHorizontal: 16,
    marginBottom: 14,
    gap: 12,
  },
  inputGNV: {
    flex: 1,
    color: coresGNV.textoGNV,
    fontSize: 16,
    paddingVertical: 15,
  },
  erroGNV: {
    color: coresGNV.erroGNV,
    marginBottom: 12,
  },
  botaoGNV: {
    backgroundColor: coresGNV.primariaGNV,
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
    marginTop: 8,
  },
  textoBotaoGNV: {
    color: coresGNV.fundoGNV,
    fontSize: 18,
    fontWeight: "bold",
  },
  dicaGNV: {
    color: coresGNV.textoSuaveGNV,
    fontSize: 12,
    textAlign: "center",
    marginTop: 20,
  },
});
