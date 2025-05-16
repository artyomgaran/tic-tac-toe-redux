import styles from './Field.module.css';
import Cell from '../Cell/Cell';
import PropTypes from 'prop-types';
import { store } from '../../Redux/store';

function FieldLayout({ handleCellClick }) {
	const state = store.getState();

	return (
		<div className={styles.field}>
			{state.field.map((cell, index) => (
				<Cell key={index} value={cell} onClick={() => handleCellClick(index)} />
			))}
		</div>
	);
}

FieldLayout.propTypes = {
	handleCellClick: PropTypes.func.isRequired,
};

export default FieldLayout;
