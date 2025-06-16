import bcrypt from 'bcrypt'


export const hashPassword = (pass: string) => bcrypt.hash(pass, 10)
export const comparePassword = (pass: string, hash: string) => bcrypt.compare(pass, hash)