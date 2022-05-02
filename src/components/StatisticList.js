export default StatisticsList
function StatisticsList({label, percentage }) {
    return <span className="static__container">
        <span className="label">{label}</span>
        <span className="percentage">{percentage}%</span>
          
          </span>
        
     
}
