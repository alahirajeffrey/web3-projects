import path, { dirname } from "path"
import { checkAndCreateFIle } from "./utils.js"

const accountFilePath = path.join(dirname("./"), "accounts.json")
const transactionFilePath = path.join(dirname("./"), "transactions.json")

// create files if they do not exists
checkAndCreateFIle(accountFilePath, [])
checkAndCreateFIle(transactionFilePath, [])
