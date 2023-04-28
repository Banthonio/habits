import { ScrollView, View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import dayjs from "dayjs";
import { Ionicons } from "@expo/vector-icons";
import colors from "tailwindcss/colors";

import { BackButton } from "../components/BackButton";
import { ProgressBar } from "../components/ProgressBar";
import habits from "../../habits.json";

interface Params {
	date: string;
}

const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const idsy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const idsx = [1, 2, 3];

export function Habit() {
	const route = useRoute();
	const { date } = route.params as Params;

	const parsedDate = dayjs(date);
	const dayOfTheWeek = parsedDate.format("dddd");
	const dayAndMonth = parsedDate.format("DD/MM");

	function getRandomNumber(arr: number[], num: number) {
		const shuffled = [...arr].sort(() => 0.5 - Math.random());
		return shuffled.slice(0, num);
	}
	const rand = getRandomNumber(ids, 3);

	const filteredHabits = habits.filter(
		(value) => value.id === rand[0] || value.id === rand[1] || value.id === rand[2]
	);

	return (
		<View className="flex-1 bg-background px-8 pt-16">
			<BackButton />
			<Text className="mt-6 text-zinc-400 font-semibold text-base lowercase">
				{dayOfTheWeek}
			</Text>
			<Text className="text-white font-semibold text-3xl">{dayAndMonth}</Text>

			<ProgressBar progress={10} />
			<ScrollView
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{ paddingBottom: 100 }}
			>
				<View className="mt-10">
					{filteredHabits.map((item) => (
						<View
							key={item.id}
							className="mt-5 w-full px-3 py-3 rounded-lg bg-neutral-800 space-y-2"
						>
							<View className="flex-row w-full justify-between">
								<Text className=" text-white font-semibold text-xl">
									{item.title}
								</Text>
								<Ionicons
									name="md-checkmark-done"
									size={25}
									color={colors.green[400]}
								/>
							</View>
							<Text className="mt-6 text-zinc-400 font-semibold text-base lowercase text-justify">
								{item.description}
							</Text>
						</View>
					))}
				</View>
			</ScrollView>
		</View>
	);
}
