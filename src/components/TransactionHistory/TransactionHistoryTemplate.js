import PropTypes from 'prop-types';
export default TransactionHistoryTemplate;
function TransactionHistoryTemplate({ type, amount, currency }) {
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}
TransactionHistoryTemplate.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
