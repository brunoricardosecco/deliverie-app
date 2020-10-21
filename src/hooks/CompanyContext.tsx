import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
} from 'react';

import { fetchCompanies } from '../services/companies';

export interface Images {
  path: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface Company {
  id: number;
  trading_name: string;
  cnpj: string;
  phone_ddd: string;
  phone_number: string;
  street: string;
  number: number;
  district: string;
  city: string;
  state: string;
  complement: string;
  has_delivery: boolean;
  delivery_price: string;
  profileImages: Images;
  company_category: Category;
}

interface CompanyState {
  companies: Array<Partial<Company>>;
}

interface CompanyContextData {
  companies: Array<Partial<Company>>;
  loading: boolean;
  get: () => Promise<void>;
}

const CompanyContext = createContext<CompanyContextData>(
  {} as CompanyContextData,
);

const CompanyProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<CompanyState>({} as CompanyState);
  const [loading, setLoading] = useState(false);

  const get = async (categoryId: any) => {
    try {
      setLoading(true);
      const response = await fetchCompanies(categoryId);
      const { data: companiesResult } = response;

      setData({ companies: companiesResult });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CompanyContext.Provider
      value={{ companies: data.companies, loading, get }}
    >
      {children}
    </CompanyContext.Provider>
  );
};

function useCompany(): CompanyContextData {
  const context = useContext(CompanyContext);

  if (!context) {
    throw new Error('useCompany must be used within an CompanyProvider');
  }
  return context;
}

export { CompanyProvider, useCompany };
