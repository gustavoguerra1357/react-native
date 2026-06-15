import "./global.css"; // CSS do NativeWind
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

// Exemplo de TypeScript: Definindo a tipagem das propriedades de um componente
interface BotaoProps {
  titulo: string;
  onPress: () => void;
}

// Componente Tipado
const BotaoCustomizado: React.FC<BotaoProps> = ({ titulo, onPress }) => {
  return (
    <TouchableOpacity 
      className="bg-amber-500 px-6 py-3 rounded-lg active:bg-amber-600"
      onPress={onPress}
    >
      <Text className="text-slate-900 font-bold text-center">{titulo}</Text>
    </TouchableOpacity>
  );
};

export default function App() {
  const lidarComClique = (): void => {
    console.log("Botão clicado!");
  };

  return (
    <View className="flex-1 items-center justify-center bg-slate-900 p-4">
      <Text className="text-2xl font-bold text-white mb-4 text-center">
        Study Tracker 📚
      </Text>
      
      <BotaoCustomizado 
        titulo="Iniciar Estudo" 
        onPress={lidarComClique} 
      />
    </View>
  );
}