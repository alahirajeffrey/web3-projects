import path from "path"
import fs from "fs"

export const createAccount = (firstName, lasteName, email, privateKey, address) => {
    const accountData = {
        firstname: firstName, 
        lastname: lasteName, 
        email: email, 
        privateKey: privateKey, 
        address: address
    }

    // read existing accounts
    let accounts = []

    const savedAccounts = fs.readFileSync("./accounts.json", "utf8")
    accounts.push(savedAccounts)
    console.log(savedAccounts)
    console.log(savedAccounts)

    // append new account
    accounts.push(accountData)

    fs.writeFileSync("./accounts.json", JSON.stringify(accounts))
    console.log("new account added")
    return
}

export const transferEth = (amount, fromPrivateKey, toAddress) => {}

export const getAccountDetails = (email) => {}

export const getBalance = (address) => {}

/**
 * check if a file exists and create if it does not
 * @param { string } filePath : path of file to be created
 * @param { array } initialData : initial data to include
 * @returns void
 */
export const checkAndCreateFIle = (filePath, initialData) => {
    if(!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, JSON.stringify(initialData))
        console.log(`${path.basename(filePath)} created`)
        return
    }else{
        return
    }
}