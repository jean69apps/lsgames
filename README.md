# LSgame

PWA desenvolvido com Vite + React + TypeScript + Tailwind CSS.

## 🚀 Tecnologias

- **Vite** - Build tool
- **React** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **React Router** - Roteamento
- **Supabase** - Autenticação
- **Zustand** - Gerenciamento de estado
- **react-i18next** - Internacionalização
- **vite-plugin-pwa** - PWA

## 📦 Instalação

```bash
npm install
```

## 🔧 Configuração

1. Crie um arquivo `.env` na raiz do projeto:

```env
VITE_SUPABASE_URL=sua_url_do_supabase
VITE_SUPABASE_ANON_KEY=sua_chave_anonima_do_supabase
```

2. Configure seu projeto no Supabase e obtenha as credenciais.

## 🏃 Executar

### Desenvolvimento

```bash
npm run dev
```

### Build para produção

```bash
npm run build
```

### Preview da build

```bash
npm run preview
```

## 📁 Estrutura de Pastas

```
src/
├── app/           # Router e layouts
├── pages/         # Páginas da aplicação
├── components/    # Componentes reutilizáveis
├── lib/           # Bibliotecas e utilitários
├── store/         # Estado global (Zustand)
├── i18n/          # Internacionalização
└── styles/        # Estilos globais
```

## 🌐 Idiomas Suportados

- Português (BR) - Padrão
- English
- Español

## 🔐 Rotas

- `/login` - Página pública de login
- `/home` - Página privada principal
- `/settings` - Página privada de configurações

## 📱 PWA

O aplicativo está configurado como PWA e pode ser instalado em dispositivos móveis e desktop.

## 🚀 Deploy no Cloudflare Pages

### Configuração do Build

O projeto está configurado para gerar o build na pasta `dist/` e funciona como SPA (Single Page Application) com React Router.

### Configurações no Cloudflare Pages

1. **Build command:**
   ```bash
   npm run build
   ```

2. **Output folder:**
   ```
   dist
   ```

3. **Node version:** (opcional, mas recomendado)
   ```
   18.x ou superior
   ```

### Arquivo _redirects

O arquivo `public/_redirects` é necessário para que o React Router funcione corretamente no Cloudflare Pages. Ele contém a regra de fallback:

```
/*    /index.html   200
```

Este arquivo é automaticamente copiado para `dist/_redirects` durante o build pelo Vite, garantindo que todas as rotas sejam redirecionadas para `index.html` (necessário para SPAs).

### Variáveis de Ambiente

Configure as seguintes variáveis de ambiente no Cloudflare Pages:

- `VITE_SUPABASE_URL` - URL do seu projeto Supabase
- `VITE_SUPABASE_ANON_KEY` - Chave pública (anon key) do Supabase

**Nota:** No Cloudflare Pages, vá em **Settings > Environment Variables** e adicione essas variáveis para cada ambiente (Production, Preview, etc.).

### Deploy Manual

Se preferir fazer deploy manual:

```bash
# Build do projeto
npm run build

# O resultado estará em dist/
# Faça upload da pasta dist/ para o Cloudflare Pages
```
