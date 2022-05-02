import PropTypes from 'prop-types';
import Statistics from './Statistics';
import styles from './Statistic.module.css';
export default StatisticsList;
function StatisticsList({ title, stats }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statlist}>
        {stats.map(({ id, label, percentage }) => {
          return <Statistics key={id} label={label} percentage={percentage} />;
        })}
      </ul>
    </section>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
