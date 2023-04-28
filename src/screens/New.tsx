import { ScrollView, View, Text } from "react-native";
import { BackButton } from "../components/BackButton";

export function New() {
	return (
		<View className="flex-1 bg-background px-8 pt-16">
			<ScrollView showsVerticalScrollIndicator={false}>
				<BackButton />

				<Text className="mt-6 text-white font-extrabold text-3xl">
					Controle os teus hábitos hoje!
				</Text>

				<Text className="mt-6 text-white font-semibold text-xl">
					Qual o seu comprometimento?
				</Text>

				<Text className="mt-6 text-zinc-300 font-semibold text-base">
					Não precisa marcar, temos hábitos preparados para sí. Não espero que você marque
					os habitos e depois não os faça! Eu confio em você!
				</Text>

				<Text className="mt-6 text-zinc-300 font-semibold text-base bg-neutral-800 p-2">
					Aliás você precisa acreditar em você.
				</Text>

				<Text className="mt-6 text-zinc-300 font-semibold text-base">
					Pense em mim como amigo silencioso! 🐱‍👤
				</Text>
			</ScrollView>
		</View>
	);
}
