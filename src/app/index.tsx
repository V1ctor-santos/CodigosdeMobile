import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import { coresGNV } from "@/constants/temaGNV";
import { fotoAberturaGNV } from "@/constants/imagensGNV";

export default function TelaAberturaGNV() {
  const routerGNV = useRouter();

  return (
    <ImageBackground
      source={{ uri: fotoAberturaGNV }}
      style={estilosGNV.fundoGNV}
      resizeMode="cover"
    >
      <View style={estilosGNV.peliculaGNV} />

      <View style={estilosGNV.conteudoGNV}>
        <Text style={estilosGNV.marcaGNV}>NEOWEAR</Text>
        <Text style={estilosGNV.tituloGNV}>Vista o futuro, hoje.</Text>
        <Text style={estilosGNV.subtituloGNV}>
          Moda futurista com envio rápido até a sua porta. Comece agora a sua
          jornada no estilo.
        </Text>

        <View style={estilosGNV.pontosGNV}>
          <View style={estilosGNV.pontoGNV} />
          <View style={estilosGNV.pontoGNV} />
          <View style={estilosGNV.pontoAtivoGNV} />
        </View>

        <TouchableOpacity
          style={estilosGNV.botaoGNV}
          onPress={() => routerGNV.push("/login")}
        >
          <Text style={estilosGNV.textoBotaoGNV}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const estilosGNV = StyleSheet.create({
  fundoGNV: {
    flex: 1,
    backgroundColor: coresGNV.fundoGNV,
    justifyContent: "flex-end",
  },
  peliculaGNV: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(10,10,20,0.55)",
  },
  conteudoGNV: {
    padding: 24,
    paddingBottom: 40,
  },
  marcaGNV: {
    color: coresGNV.primariaGNV,
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 6,
    marginBottom: 12,
  },
  tituloGNV: {
    color: coresGNV.textoGNV,
    fontSize: 34,
    fontWeight: "bold",
  },
  subtituloGNV: {
    color: coresGNV.textoSuaveGNV,
    fontSize: 16,
    lineHeight: 22,
    marginTop: 10,
  },
  pontosGNV: {
    flexDirection: "row",
    alignSelf: "center",
    gap: 6,
    marginVertical: 24,
  },
  pontoGNV: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: coresGNV.bordaGNV,
  },
  pontoAtivoGNV: {
    width: 28,
    height: 8,
    borderRadius: 4,
    backgroundColor: coresGNV.primariaGNV,
  },
  botaoGNV: {
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
