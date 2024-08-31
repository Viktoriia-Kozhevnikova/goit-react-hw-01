import s from '../TransactionHistory/TransactionHistory.module.css'

const TransactionHistory = ({ items }) => {
    const upperCaseFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};


  return (
    <>
        <table className={s.table}>
            <thead>
                <tr>
                    <th className={s.header}>Type</th>
                    <th className={s.header}>Amount</th>
                    <th className={s.header}>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item) => {
                    return (
                        <tr className={s.row} key={item.id}>
                            <td className={s.data}>{upperCaseFirstLetter(item.type)}</td>
                            <td className={s.data}>{item.amount}</td>
                            <td className={s.data}>{item.currency}</td>
                        </tr>
                    );
                })}
            </tbody>    
        </table>
    </>
  )
}

export default TransactionHistory







