import { useState, useEffect } from 'react';
import { store } from '../../Redux/store';
import Field from '../Field/Field';
import Information from '../Information/Information';
import styles from './Game.module.css';

function Game() {
	const [, forceRender] = useState(0);

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			forceRender((x) => x + 1);
		});

		return unsubscribe;
	}, []);

	const resetGame = () => {
		store.dispatch({ type: 'RESTART_GAME' });
	};

	return (
		<div className={styles.game}>
			<Information />
			<Field />
			<button className={styles.resetButton} onClick={resetGame}>
				Начать заново
			</button>
		</div>
	);
}

export default Game;
