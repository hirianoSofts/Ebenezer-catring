# Ebenézer Catering

Website estático em HTML, CSS e JavaScript, preparado para GitHub Pages e Vercel.

## Estrutura

- `index.html` — página principal e metadados SEO/Open Graph.
- `css/style.css` — estilos responsivos.
- `js/script.js` — menu mobile e formulário WhatsApp.
- `assets/og-image.png` — imagem Open Graph 1200 × 630 para prévias em redes sociais.
- `assets/favicon.svg` — favicon.
- `robots.txt` e `sitemap.xml` — ficheiros para motores de busca.
- `vercel.json` — configuração de cabeçalhos e URLs na Vercel.
- `.nojekyll` — evita processamento Jekyll no GitHub Pages.

## Antes de publicar

1. Escolha o domínio final do site.
2. Em `index.html`, substitua `https://ebenezer-catering.vercel.app/` pelo domínio final em:
   - `og:url`
   - `og:image`
   - `twitter:image`
   - `canonical`
3. Atualize também o domínio em `robots.txt` e `sitemap.xml`.
4. Atualize telefone e email demonstrativos na secção Contacto.
5. Em `js/script.js`, substitua `258XXXXXXXXX` pelo número oficial de WhatsApp (apenas números, com indicativo do país).

## Publicar na Vercel

1. Crie um repositório GitHub e envie todos os ficheiros desta pasta para a raiz do repositório.
2. Na Vercel, escolha **Add New → Project** e importe o repositório.
3. Framework Preset: **Other**.
4. Build Command: deixe vazio.
5. Output Directory: `.` (raiz do projeto).
6. Clique em Deploy.

Não é necessário Node.js, npm, build command ou dependências.

## Publicar no GitHub Pages

1. Abra o repositório no GitHub.
2. Vá a **Settings → Pages**.
3. Em Build and deployment, escolha **Deploy from a branch**.
4. Selecione `main` e `/ (root)` e guarde.

O `.nojekyll` já está incluído. Para domínio personalizado, configure o domínio em GitHub Pages e os registos DNS no seu fornecedor.

## Pré-visualizações no WhatsApp

A imagem `assets/og-image.png` é uma imagem PNG pública com 1200 × 630 px. WhatsApp e outras plataformas leem as tags Open Graph no HTML publicado. A imagem e o site precisam estar acessíveis publicamente por HTTPS; a prévia não aparece ao partilhar um ficheiro local.

Depois de publicar:
- teste a URL pública numa conversa consigo próprio;
- se a prévia antiga continuar, o WhatsApp pode estar a usar cache;
- confirme que `https://SEU-DOMINIO/assets/og-image.png` abre diretamente no navegador;
- confirme que `og:url` e `og:image` usam o domínio final, não o domínio de exemplo.

## Personalização

As fotografias de conteúdo usam URLs do Unsplash e a fonte/ícones usam CDNs, portanto precisam de internet. Substitua os contactos de exemplo e confirme as imagens antes de publicar comercialmente.
