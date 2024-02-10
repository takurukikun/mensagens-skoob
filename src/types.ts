export interface MessageDataProps {
  success: boolean;
  error: any;
  response: Response[];
  paging: Paging;
}

export interface Response {
  recado: string;
  usuario_id: number;
  remetente_id: number;
  status: number;
  push: number;
  created: string;
  visualizado: string;
  id: string;
  remetente: Remetente;
}

export interface Remetente {
  id: number;
  nome: string;
  apelido: string;
  abbr: string;
  foto_mini: string;
  foto_pequena: string;
  foto_media: string;
  foto_grande: string;
  foto: string;
  foto_placeholder: string;
  url: string;
  skoob: string;
  beta: number;
  ano: number;
  mes: number;
  about: string;
  premium: number;
  termo: string;
}

export interface Paging {
  total: number;
  page_count: number;
  page: number;
  prev_page: boolean;
  next_page: boolean;
  limit: number;
  order: any;
}
