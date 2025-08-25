/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect, useState } from "react";
import { ITransacoes, IUsuario } from "../types";
import {
  obterUsuario,
  criarUsuario,
  obterTransacoes,
  criarTransacao,
} from "../api";

interface AppContextType {
  usuario: IUsuario | null;
  criaUsuario: (usuario: Omit<IUsuario, "id" | "orcamentoDiario">) => Promise<void>;
  transacoes: ITransacoes[];
  criaTransacao: (novaTransacao: Omit<ITransacoes, "id" | "userId">) => Promise<void>;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [usuario, setUsuario] = useState<IUsuario | null>(null);
  const [transacoes, setTransacoes] = useState<ITransacoes[]>([]);

  const carregaDadosUsuario = async () => {
    try {
      const usuarios = await obterUsuario();
      const transacoes = await obterTransacoes();
      if (usuarios.length > 0) {
        setUsuario(usuarios[0]);
        setTransacoes(transacoes);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    carregaDadosUsuario();
  });

  const criaUsuario = async (usuario: Omit<IUsuario, "id" | "orcamentoDiario">) => {
    try {
      const novoUsuario = await criarUsuario(usuario);
      setUsuario(novoUsuario);
    } catch (err) {
      console.log(err);
    }
  };

  const criaTransacao = async (novaTransacao: Omit<ITransacoes, "id" | "userId">) => {
    try {
      if (!usuario) {
        throw new Error("Não é possível criar transações sem um usuário identificado")
      }
      const {transacao, novoOrcamentoDiario} = await criarTransacao(novaTransacao, usuario);
      setTransacoes((prev) => [...prev, transacao]);
      setUsuario ((prev) => prev ? {...prev, orcamentoDiario: novoOrcamentoDiario}: null)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AppContext.Provider
      value={{ usuario, criaUsuario, transacoes, criaTransacao }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext deve ser usado dentro de um Provider");
  }

  return context;
};
