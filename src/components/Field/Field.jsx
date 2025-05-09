import { store } from '../../Redux/store';
import PropTypes from 'prop-types';
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

function Field({ field, currentPlayer, isGameEnded }) {
	const handleCellClick = (index) => {
		if (field[index] || isGameEnded) return;

		const newField = [...field];
		newField[index] = currentPlayer;
		store.dispatch({ type: 'SET_FIELD', payload: newField });

		if (checkWinner(newField, currentPlayer)) {
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
			payload: currentPlayer === 'X' ? 'O' : 'X',
		});
	};

	const checkWinner = (field, player) => {
		return WIN_PATTERNS.some((pattern) =>
			pattern.every((index) => field[index] === player),
		);
	};

	return <FieldLayout field={field} handleCellClick={handleCellClick} />;
}

Field.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	currentPlayer: PropTypes.string.isRequired,
	isGameEnded: PropTypes.bool.isRequired,
};

export default Field;
