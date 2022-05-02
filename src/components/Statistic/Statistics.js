import styles from './Statistic.module.css';
import PropTypes from 'prop-types';
export default Statistics;
function Statistics({ label, percentage }) {
  return (
    <span className={styles.static__container}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </span>
  );
}
Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
