import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { coresGNV } from "@/constants/temaGNV";
import { useCarrinhoGNV } from "@/contexts/CarrinhoContextoGNV";

export default function RootTabsLayoutGNV() {
  const { totalItensGNV } = useCarrinhoGNV();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarPosition: "bottom",
        tabBarShowLabel: false,
        tabBarActiveTintColor: coresGNV.primariaGNV,
        tabBarInactiveTintColor: coresGNV.textoSuaveGNV,
        tabBarStyle: {
          backgroundColor: coresGNV.superficieGNV,
          borderTopColor: coresGNV.bordaGNV,
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favoritos"
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="heart" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="carrinho"
        options={{
          tabBarBadge: totalItensGNV > 0 ? totalItensGNV : undefined,
          tabBarBadgeStyle: {
            backgroundColor: coresGNV.destaqueGNV,
            color: coresGNV.textoGNV,
          },
          tabBarIcon: ({ color }) => (
            <Feather name="shopping-bag" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen name="perfil" options={{ href: null }} />
    </Tabs>
  );
}
