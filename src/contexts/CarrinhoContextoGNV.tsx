import { createContext, ReactNode, useContext, useState } from "react";
import { ProdutoGNV } from "@/models/ProdutoGNV";

export interface ItemCarrinhoGNV {
  chaveGNV: string;
  produtoGNV: ProdutoGNV;
  tamanhoGNV: string;
  quantidadeGNV: number;
}

interface CarrinhoContextoTipoGNV {
  itensGNV: ItemCarrinhoGNV[];
  totalItensGNV: number;
  totalPrecoGNV: number;
  adicionarGNV: (produtoGNV: ProdutoGNV, tamanhoGNV: string) => void;
  alterarQuantidadeGNV: (chaveGNV: string, variacaoGNV: number) => void;
  removerGNV: (chaveGNV: string) => void;
  limparGNV: () => void;
}

const CarrinhoContextoGNV = createContext<CarrinhoContextoTipoGNV | undefined>(
  undefined,
);

export function CarrinhoProviderGNV({ children }: { children: ReactNode }) {
  const [itensGNV, setItensGNV] = useState<ItemCarrinhoGNV[]>([]);

  function adicionarGNV(produtoGNV: ProdutoGNV, tamanhoGNV: string) {
    const chaveGNV = `${produtoGNV.idGNV}-${tamanhoGNV}`;
    setItensGNV((anterioresGNV) => {
      const existenteGNV = anterioresGNV.find(
        (itemGNV) => itemGNV.chaveGNV === chaveGNV,
      );
      if (existenteGNV) {
        return anterioresGNV.map((itemGNV) =>
          itemGNV.chaveGNV === chaveGNV
            ? { ...itemGNV, quantidadeGNV: itemGNV.quantidadeGNV + 1 }
            : itemGNV,
        );
      }
      return [
        ...anterioresGNV,
        { chaveGNV, produtoGNV, tamanhoGNV, quantidadeGNV: 1 },
      ];
    });
  }

  function alterarQuantidadeGNV(chaveGNV: string, variacaoGNV: number) {
    setItensGNV((anterioresGNV) =>
      anterioresGNV
        .map((itemGNV) =>
          itemGNV.chaveGNV === chaveGNV
            ? { ...itemGNV, quantidadeGNV: itemGNV.quantidadeGNV + variacaoGNV }
            : itemGNV,
        )
        .filter((itemGNV) => itemGNV.quantidadeGNV > 0),
    );
  }

  function removerGNV(chaveGNV: string) {
    setItensGNV((anterioresGNV) =>
      anterioresGNV.filter((itemGNV) => itemGNV.chaveGNV !== chaveGNV),
    );
  }

  function limparGNV() {
    setItensGNV([]);
  }

  const totalItensGNV = itensGNV.reduce(
    (somaGNV, itemGNV) => somaGNV + itemGNV.quantidadeGNV,
    0,
  );
  const totalPrecoGNV = itensGNV.reduce(
    (somaGNV, itemGNV) =>
      somaGNV + itemGNV.quantidadeGNV * itemGNV.produtoGNV.precoGNV,
    0,
  );

  return (
    <CarrinhoContextoGNV.Provider
      value={{
        itensGNV,
        totalItensGNV,
        totalPrecoGNV,
        adicionarGNV,
        alterarQuantidadeGNV,
        removerGNV,
        limparGNV,
      }}
    >
      {children}
    </CarrinhoContextoGNV.Provider>
  );
}

export function useCarrinhoGNV() {
  const contextoGNV = useContext(CarrinhoContextoGNV);
  if (!contextoGNV) {
    throw new Error(
      "useCarrinhoGNV precisa estar dentro de CarrinhoProviderGNV",
    );
  }
  return contextoGNV;
}
