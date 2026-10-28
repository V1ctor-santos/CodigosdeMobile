import { Stack } from "expo-router";
import { coresGNV } from "@/constants/temaGNV";
import { CarrinhoProviderGNV } from "@/contexts/CarrinhoContextoGNV";
import { FavoritosProviderGNV } from "@/contexts/FavoritosContextoGNV";

export default function RootStackLayoutGNV() {
  return (
    <CarrinhoProviderGNV>
      <FavoritosProviderGNV>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: coresGNV.fundoGNV },
          }}
        >
          <Stack.Screen name="index" />
          <Stack.Screen name="login" />
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="produto/[id]" />
        </Stack>
      </FavoritosProviderGNV>
    </CarrinhoProviderGNV>
  );
}
