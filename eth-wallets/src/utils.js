import path from "path"
import fs from "fs"

export const createAccount = () => {}

export const transferEth = () => {}

export const getAccountDetails = () => {}

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
        console.log(`${path.basename(filePath)} already exists`)
        return
    }
}