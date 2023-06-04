import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.tableHeadTitle}>Type</th>
          <th className={styles.tableHeadTitle}>Amount</th>
          <th className={styles.tableHeadTitle}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(transaction => (
          <tr key={transaction.id} className={styles.tableBodyRow}>
            <td className={styles.tableBodyRowData}>{transaction.type}</td>
            <td className={styles.tableBodyRowData}>{transaction.amount}</td>
            <td className={styles.tableBodyRowData}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired
};

export default TransactionHistory;
