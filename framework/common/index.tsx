import { createContext, ReactNode, useContext, useMemo } from 'react';
import { ApiConfig, ApiHooks, ApiProviderContext } from './types/api';

export const ApiContext = createContext<Partial<ApiProviderContext>>({});

interface ApiProviderProps {
  children: ReactNode | ReactNode[];
  config: ApiConfig;
  hooks: ApiHooks;
}

export const ApiProvider = ({ children, config, hooks }: ApiProviderProps) => {
  const coreConfig = useMemo(() => {
    return {
      fetcher: config.fetch,
      hooks,
    };
  }, [config.fetch, hooks]);

  return <ApiContext.Provider value={config}>{children}</ApiContext.Provider>;
};

export const useApiProvider = () => {
  return useContext(ApiContext) as ApiProviderContext;
};
