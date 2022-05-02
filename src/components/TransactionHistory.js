import TransactionHistoryTemplate from './TransactionHistoryTemplate'
import PropTypes from 'prop-types';
import './TransactionHistory.css'
export default TransactionHistory
function TransactionHistory({ items }) {
  return (
  <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
    </thead>
     <tbody>
     
        {items.map(({ id, type, amount, currency}) => {
            return <TransactionHistoryTemplate key={id} type={type} amount={amount} currency={currency}/>
        })}
              
   </tbody>           
  </table>   
  )
}
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  )
}