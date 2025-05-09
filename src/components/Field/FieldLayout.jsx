import styles from './Field.module.css';
import Cell from '../Cell/Cell';
import PropTypes from 'prop-types';

function FieldLayout({ field, handleCellClick }) {
	return (
		<div className={styles.field}>
			{field.map((cell, index) => (
				<Cell key={index} value={cell} onClick={() => handleCellClick(index)} />
			))}
		</div>
	);
}

FieldLayout.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	handleCellClick: PropTypes.func.isRequired,
};
export default FieldLayout;
