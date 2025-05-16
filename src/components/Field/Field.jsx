import { store } from '../../Redux/store';
import FieldLayout from './FieldLayout';

const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8], // Горизонтали
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8], // Вертикали
	[0, 4, 8],
	[2, 4, 6], // Диагонали
];

function Field() {
	const state = store.getState();

	const handleCellClick = (index) => {
		if (state.field[index] || state.isGameEnded) return;

		const newField = [...state.field];
		newField[index] = state.currentPlayer;
		store.dispatch({ type: 'SET_FIELD', payload: newField });

		if (checkWinner(newField, state.currentPlayer)) {
			store.dispatch({ type: 'SET_IS_GAME_ENDED', payload: true });
			return;
		}

		if (!newField.includes('')) {
			store.dispatch({ type: 'SET_IS_DRAW', payload: true });
			store.dispatch({ type: 'SET_IS_GAME_ENDED', payload: true });
			return;
		}
		store.dispatch({
			type: 'SET_CURRENT_PLAYER',
			payload: state.currentPlayer === 'X' ? 'O' : 'X',
		});
	};

	const checkWinner = (field, player) => {
		return WIN_PATTERNS.some((pattern) =>
			pattern.every((index) => field[index] === player),
		);
	};

	return <FieldLayout handleCellClick={handleCellClick} />;
}

export default Field;
