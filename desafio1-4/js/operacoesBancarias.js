const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
  }


  function createTransaction(transaction){
    if(transaction.type == 'credit'){
        user.balance = user.balance + transaction.value
    }else{
        user.balance = user.balance - transaction.value
    }
    user.transactions.push(transaction)
    return user
  }

  function getHigherTransactionByType(typeTransaction){
      let higherValue = 0
      let higherTransaction
      for(let transactions of user.transactions){
          if(transactions.type == typeTransaction && transactions.value > higherValue){
              higherValue = transactions.value
              higherTransaction = transactions
          }
      }
      return higherTransaction
  }

  function getAverageTransactionValue(){
      let averageValue = 0
      let sum = 0
    
      for(let transaction of user.transactions){
          sum = sum + transaction.value
      }
      return averageValue = sum/user.transactions.length
  }

  function getTransactionsCount(){
      const counter = {
          credit: 0,
          debit: 0
      }

      for(let transaction of user.transactions){
          if(transaction.type == 'credit'){
              counter.credit ++
          }else{
              counter.debit ++
          }
      }
      return counter            
  }



createTransaction({ type: "credit", value: 50 })
createTransaction({ type: "credit", value: 120 })
createTransaction({ type: "debit", value: 80 })
createTransaction({ type: "debit", value: 30 })


console.log(user.balance); // 60

console.log(getHigherTransactionByType("credit")) // { type: 'credit', value: 120 }
console.log(getHigherTransactionByType("debit")) // { type: 'debit', value: 80 }

console.log(getAverageTransactionValue()) // 70

console.log(getTransactionsCount()) // { credit: 2, debit: 2 }


  