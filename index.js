// // callback
// function tambah(param1, param2) {
//     return param1 + param2
// }

// function kurang(param1, param2) {
//     return param1 - param2
// }

// function hitung(param1, param2, action) {
//     const hasil = action(param1, param2)

//     return hasil
// }

// // promise
// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const hitung = 1 + 2
//     resolve(hitung)
//   }, 3000)
// })
// // then
// p.then((res) => console.log("resolve: " + res)).catch((err) => console.error("reject: " + err))

// // async / await
// async function hitung() {
//   console.log("mulai perhitungan...")
//   const hasil = await p
//   console.log(hasil)
//   console.log("perhitungan selesai")
// }

// // //
const user = [
  { id: 1, username: "lala", address: "jakarta" },
  { id: 2, username: "lili", address: "surabaya" },
]

const transaction = [
  {
    userId: 1,
    transaction: [
      { id: 1, status: "Selesai" },
      { id: 2, status: "Sedang Dikirim" },
    ],
  },
  {
    userId: 2,
    transaction: [
      { id: 1, status: "Selesai" },
      { id: 2, status: "Dibatalkan" },
    ],
  },
]

const detailTransaction = [
  { id: 1, productItems: "Kopi Hitam", qty: 3, totalAmount: 3000 },
  { id: 2, productItems: "Kopi Susu", qty: 1, totalAmount: 5000 },
]

// async/await
function login(username) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(user.find((u) => u.username === username))
    }, 1000)
  })
}

function getTransaction(userId) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(transaction.find((t) => t.userId === userId))
    }, 1000)
  })
}

function getDetailTransaction(transaction) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(detailTransaction.filter((dt) => transaction.filter((t) => t.id === dt.id)))
    }, 1000)
  })
}
async function main() {
  const user = await login("lala")
  console.log(user)
  const transaction = await getTransaction(user.id)
  console.log(transaction)
  const detailTransaction = await getDetailTransaction(transaction.transaction)
  console.log(detailTransaction)
}

main()

// // callback
// function login(username, callback) {
//   setTimeout(() => {
//     return callback(user.find((u) => u.username === username))
//   }, 1000)
// }

// function getTransaction(userId, callback) {
//   setTimeout(() => {
//     return callback(transaction.find((t) => t.userId === userId))
//   }, 1000)
// }

// function getDetailTransaction(transaction, callback) {
//   setTimeout(() => {
//     return callback(detailTransaction.filter((dt) => transaction.filter((t) => t.id === dt.id)))
//   }, 1000)
// }

// login("lala", (user) => {
//   console.log(user)
//   getTransaction(user.id, (transaction) => {
//     console.log(transaction)

//     getDetailTransaction(transaction.transaction, (dt) => {
//       console.log(dt)
//     })
//   })
// })
