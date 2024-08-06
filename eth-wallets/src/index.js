import path, { dirname } from "path"
import { checkAndCreateFIle, createAccount } from "./utils.js"

const accountFilePath = path.join(dirname("./"), "accounts.json")
const transactionFilePath = path.join(dirname("./"), "transactions.json")

// create files if they do not exists
checkAndCreateFIle(accountFilePath, [])
checkAndCreateFIle(transactionFilePath, [])

console.log("Welcome")
console.log("To create an account, press 1")
console.log("To transfer funds, press 2")
console.log("To view account details, press 3")

process.stdout.write('what would you like to do: ');

process.stdin.on("data", (data) => {
    const firstQuestion = data.toString().trim();
    if(firstQuestion == 1){
        createAccount("firstname1", "lastname", "email", "privaekey", "address")
    }
})
