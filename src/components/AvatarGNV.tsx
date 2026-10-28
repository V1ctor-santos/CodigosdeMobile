import { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { coresGNV } from "@/constants/temaGNV";
import { linkFotoPerfilGNV } from "@/constants/avatarGNV";

interface AvatarPropsGNV {
  tamanhoGNV?: number;
}

export default function AvatarGNV({ tamanhoGNV = 46 }: AvatarPropsGNV) {
  const [falhouGNV, setFalhouGNV] = useState(false);
  const temFotoGNV = linkFotoPerfilGNV.trim() !== "" && !falhouGNV;

  return (
    <View
      style={[
        estilosGNV.molduraGNV,
        {
          width: tamanhoGNV,
          height: tamanhoGNV,
          borderRadius: tamanhoGNV * 0.3,
        },
      ]}
    >
      {temFotoGNV ? (
        <Image
          source={{ uri: linkFotoPerfilGNV.trim() }}
          style={estilosGNV.fotoGNV}
          resizeMode="cover"
          onError={() => setFalhouGNV(true)}
        />
      ) : (
        <Feather
          name="user"
          size={tamanhoGNV * 0.5}
          color={coresGNV.primariaGNV}
        />
      )}
    </View>
  );
}

const estilosGNV = StyleSheet.create({
  molduraGNV: {
    backgroundColor: coresGNV.campoGNV,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  fotoGNV: {
    width: "100%",
    height: "100%",
  },
});
