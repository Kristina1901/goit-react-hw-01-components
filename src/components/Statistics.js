import PropTypes from 'prop-types';
import StatisticsList from "./StatisticList"
import './Statistic.css'
export default Statistics
function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => {
          return <StatisticsList key={id} label={label} percentage={percentage} />;
        })}
      </ul>
    </section>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      percentage: PropTypes.number,
     
    }),
  ),
};