import { store } from '../../Redux/store';
import styles from './Information.module.css';

function Information() {
	const state = store.getState();

	let message = `Ходит: ${state.currentPlayer}`;
	if (state.isDraw) message = 'Ничья!';
	if (state.isGameEnded && !state.isDraw) message = `Победа: ${state.currentPlayer}`;

	return <div className={styles.information}>{message}</div>;
}

export default Information;
