# Guia Rápido: React Native (Expo)

## 1. Criando o Projeto

O Expo é a abordagem padrão recomendada para desenvolvimento React Native.

### Opção A: Versão SDK 54

```bash
npx create-expo-app@54 meu-app --template blank
```

### Opção B: Última Versão (Mais Recente)

```bash
npx create-expo-app@latest meu-app
```

---

## 2. Comandos de Execução

Entre na pasta do projeto:

```bash
cd meu-app
```

Inicie o servidor de desenvolvimento ou rode diretamente na plataforma desejada:

```bash
# Inicia o servidor Expo (gera QR Code para ler com o app Expo Go)
npx expo start

# Executa diretamente nos emuladores/dispositivos
npm run android
npm run ios
npm run web
```

---

## 3. Arquitetura de Pastas (Expo Router)

Os templates modernos do Expo utilizam o **Expo Router**, onde a estrutura de pastas define as rotas do aplicativo automaticamente (baseado em arquivos):

```text
meu-app/
├── app/                  # Diretório principal de telas e rotas
│   ├── _layout.tsx       # Layout estrutural e configurações de navegação
│   ├── index.tsx         # Tela inicial do aplicativo (rota "/")
│   └── detalhes.tsx      # Exemplo de nova tela (rota "/detalhes")
├── assets/               # Arquivos de mídia (imagens, ícones, fontes)
├── components/           # Componentes TypeScript reutilizáveis (botões, inputs)
├── package.json          # Dependências e scripts do projeto
└── tsconfig.json         # Configuração do TypeScript
```

