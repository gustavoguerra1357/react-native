# Configurando NativeWind v5 no Expo (SDK 54) + TypeScript

Guia passo a passo para instalar e configurar o Tailwind CSS (NativeWind v5) em um projeto já existente utilizando o Expo SDK 54.

---

## Passo 1: Instalar o NativeWind e Dependências

Execute o comando abaixo no terminal da raiz do seu projeto para instalar o NativeWind e as dependências nativas necessárias:

```bash
npx expo install nativewind@preview react-native-css react-native-reanimated react-native-safe-area-context
```

## Passo 2: Instalar e Configurar o Tailwind CSS

1. Instale o Tailwind e as ferramentas do PostCSS como dependências de desenvolvimento:
```bash
npx expo install --dev tailwindcss @tailwindcss/postcss postcss
```

2. Crie um arquivo chamado **`postcss.config.mjs`** na raiz do projeto e adicione o plugin do Tailwind:
```javascript
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

3. Crie um arquivo chamado **`global.css`** na raiz do projeto e adicione as seguintes diretivas de importação:
```css
@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/preflight.css" layer(base);
@import "tailwindcss/utilities.css";
 
@import "nativewind/theme";
```

## Passo 3: Configurar o Metro Bundler

Modifique ou crie o arquivo **`metro.config.js`** na raiz do projeto, envolvendo a configuração padrão com a função `withNativewind`:

```javascript
const { getDefaultConfig } = require("expo/metro-config");
const { withNativewind } = require("nativewind/metro");
 
/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);
 
module.exports = withNativewind(config);
```

## Passo 4: Fixar Versão do LightningCSS (Evitar Erros)

Abra o seu arquivo **`package.json`** e adicione a propriedade `"overrides"` para fixar a versão estável do compilador CSS:

```json
{
  "dependencies": { ... },
  "devDependencies": { ... },
  "overrides": {
    "lightningcss": "1.30.1"
  }
}
```
*Após salvar o `package.json`, execute `npm install` no terminal para aplicar a alteração.*

## Passo 5: Configuração do TypeScript

Para que o compilador do TypeScript reconheça a propriedade `className` nos componentes nativos, crie um arquivo chamado **`nativewind-env.d.ts`** na raiz do projeto (mantenha exatamente esse nome) e adicione a seguinte linha:

```typescript
/// <reference types="react-native-css/types" />
```

## Passo 6: Importação Global e Uso

Importe o arquivo `global.css` na **primeira linha** do arquivo principal do seu app (geralmente `app/_layout.tsx` se estiver usando o Expo Router, ou `App.tsx` na raiz):

```tsx
import "./global.css"; // OBRIGATÓRIO na primeira linha
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-900">
      <Text className="text-2xl font-bold text-amber-400">
        NativeWind Funcionando! 🚀
      </Text>
    </View>
  );
}
```

---

## 💡 Dica de Execução
Ao rodar o projeto pela primeira vez após a configuração, limpe o cache do Expo para evitar conflitos:

```bash
npx expo start --clear