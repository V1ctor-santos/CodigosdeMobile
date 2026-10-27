import { coresGNV } from "@/constants/temaGNV";
import { useCarrinhoGNV } from "@/contexts/CarrinhoContextoGNV";
import { Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function RootTabsLayoutGNV() {
  const { totalItensGNV } = useCarrinhoGNV();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarPosition: "bottom",
        tabBarActiveTintColor: coresGNV.primariaGNV,
        tabBarInactiveTintColor: coresGNV.textoSuaveGNV,
        tabBarStyle: {
          backgroundColor: coresGNV.superficieGNV,
          borderTopColor: coresGNV.bordaGNV,
          height: 64,
          paddingBottom: 8,
          paddingTop: 6,
        },
        tabBarLabelStyle: { fontSize: 12 },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Início",
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="carrinho"
        options={{
          title: "Carrinho",
          tabBarBadge: totalItensGNV > 0 ? totalItensGNV : undefined,
          tabBarBadgeStyle: {
            backgroundColor: coresGNV.destaqueGNV,
            color: coresGNV.textoGNV,
          },
          tabBarIcon: ({ color, size }) => (
            <Feather name="shopping-bag" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
