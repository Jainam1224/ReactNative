import axios from "axios";

export function storeExpense(expenseData) {
  axios.post(
    "https://expense-app-react-native-60b47-default-rtdb.firebaseio.com/expenses.json",
    expenseData
  );
}
