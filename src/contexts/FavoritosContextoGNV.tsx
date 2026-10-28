import { createContext, ReactNode, useContext, useState } from "react";

interface FavoritosContextoTipoGNV {
  idsFavoritosGNV: string[];
  alternarFavoritoGNV: (idGNV: string) => void;
  ehFavoritoGNV: (idGNV: string) => boolean;
}

const FavoritosContextoGNV = createContext<
  FavoritosContextoTipoGNV | undefined
>(undefined);

export function FavoritosProviderGNV({ children }: { children: ReactNode }) {
  const [idsFavoritosGNV, setIdsFavoritosGNV] = useState<string[]>([]);

  function alternarFavoritoGNV(idGNV: string) {
    if (idsFavoritosGNV.includes(idGNV)) {
      setIdsFavoritosGNV(
        idsFavoritosGNV.filter((itemGNV) => itemGNV !== idGNV),
      );
    } else {
      setIdsFavoritosGNV([...idsFavoritosGNV, idGNV]);
    }
  }

  function ehFavoritoGNV(idGNV: string) {
    return idsFavoritosGNV.includes(idGNV);
  }

  return (
    <FavoritosContextoGNV.Provider
      value={{ idsFavoritosGNV, alternarFavoritoGNV, ehFavoritoGNV }}
    >
      {children}
    </FavoritosContextoGNV.Provider>
  );
}

export function useFavoritosGNV() {
  const contextoGNV = useContext(FavoritosContextoGNV);
  if (!contextoGNV) {
    throw new Error(
      "useFavoritosGNV deve ser usado dentro de FavoritosProviderGNV",
    );
  }
  return contextoGNV;
}
