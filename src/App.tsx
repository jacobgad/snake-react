const boardSize = 20;

type CellValue = "empty" | "food" | "snake";

export default function App() {
	const board = new Array<number>(boardSize)
		.fill(0)
		.map(() => new Array<CellValue>(boardSize).fill("empty"));

	console.log(board);

	return (
		<div className="mx-auto my-6 max-w-xl">
			<h1>Snake</h1>

			<div className="border">
				{board.map((row) => (
					<div className="flex">
						{row.map((cell) => (
							<div
								className={`aspect-square w-full border 
									${cell === "snake" && "bg-blue-500"} 
									${cell === "food" && "bg-green-500"}
									`}
							/>
						))}
					</div>
				))}
			</div>
		</div>
	);
}
