/**
 * URL canônica de produção — usada em Open Graph, canonical e compartilhamento.
 * Ao trocar de domínio, altere apenas aqui e as tags em index.html.
 */
export const SITE_URL = "https://gabrieldmonteiro.com.br";
export const SITE_NAME = "Gabriel D. Monteiro";

/** URLs absolutas para previews (LinkedIn, WhatsApp, etc.). */
export const SITE_ASSETS = {
  ogImage: `${SITE_URL}/logo.png`,
  favicon: `${SITE_URL}/logo.png`,
} as const;
