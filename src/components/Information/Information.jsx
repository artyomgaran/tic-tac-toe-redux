import PropTypes from 'prop-types';
import styles from './Information.module.css';

function Information({ currentPlayer, isGameEnded, isDraw }) {
	let message = `Ходит: ${currentPlayer}`;
	if (isDraw) message = 'Ничья!';
	if (isGameEnded && !isDraw) message = `Победа: ${currentPlayer}`;

	return <div className={styles.information}>{message}</div>;
}

Information.propTypes = {
	currentPlayer: PropTypes.string.isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	isDraw: PropTypes.bool.isRequired,
};

export default Information;
