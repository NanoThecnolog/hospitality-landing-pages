# Igloo Inn + Pargos Club

Monorepo com duas landing pages independentes em Next.js (Pages Router) e uma biblioteca visual compartilhada.

## Configuração

- Igloo Inn: `apps/igloo/site.config.ts`
- Pargos Club: `apps/pargos/site.config.ts`

Cada arquivo concentra identidade, cores, textos, contatos, links, imagens, destinos e comunicado.

## Desenvolvimento

```bash
yarn install
yarn dev:igloo   # http://localhost:3000
yarn dev:pargos  # http://localhost:3001
```

## Validação e build

```bash
yarn typecheck
yarn build
```

Os formulários de contato encaminham a mensagem preenchida para o WhatsApp oficial configurado. Não há coleta nem armazenamento local dos dados.
