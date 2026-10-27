import { ReactNode, useState } from "react";
import { Image, StyleProp, View, ViewStyle } from "react-native";
import { Feather } from "@expo/vector-icons";
import { coresGNV } from "@/constants/temaGNV";

interface ImagemRemotaPropsGNV {
  uriGNV: string;
  corFundoGNV: string;
  iconeGNV: keyof typeof Feather.glyphMap;
  estiloGNV?: StyleProp<ViewStyle>;
  tamanhoIconeGNV?: number;
  modoGNV?: "cover" | "contain";
  children?: ReactNode;
}

export default function ImagemRemotaGNV({
  uriGNV,
  corFundoGNV,
  iconeGNV,
  estiloGNV,
  tamanhoIconeGNV = 40,
  modoGNV = "cover",
  children,
}: ImagemRemotaPropsGNV) {
  const [falhouGNV, setFalhouGNV] = useState(false);

  return (
    <View
      style={[
        {
          backgroundColor: corFundoGNV,
          overflow: "hidden",
          alignItems: "center",
          justifyContent: "center",
        },
        estiloGNV,
      ]}
    >
      {falhouGNV ? (
        <Feather
          name={iconeGNV}
          size={tamanhoIconeGNV}
          color={coresGNV.primariaGNV}
        />
      ) : (
        <Image
          source={{ uri: uriGNV }}
          style={{ width: "100%", height: "100%" }}
          resizeMode={modoGNV}
          onError={() => setFalhouGNV(true)}
        />
      )}
      {children}
    </View>
  );
}
