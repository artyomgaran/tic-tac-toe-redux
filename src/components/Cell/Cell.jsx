import PropTypes from "prop-types";
import styles from "./Cell.module.css";

function Cell({ value, onClick }) {
  return (
    <button className={styles.cell} onClick={onClick} disabled={!!value}>
      {value}
    </button>
  );
}

Cell.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Cell;
