import styles from './Statistic.module.css'
export default Statistics
function Statistics({label, percentage }) {
    return <span className={styles.static__container}>
        <span className="label">{label}</span>
        <span className="percentage">{percentage}%</span>
          
          </span>
        
     
}