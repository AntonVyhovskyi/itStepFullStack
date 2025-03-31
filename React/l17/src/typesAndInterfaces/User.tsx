export interface User {

    id: number,
    name: string,
    email: string,
    username: string,
    address: UserAdress
    phone: string,
    websie: string,
    compay: UserCompany
}

interface UserCompany {
    name: string,
    catchPhrase: string,
    bs: string
}

interface UserAdress {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: UserAdressGeo
}

interface UserAdressGeo {

    lat: string,
    lng: string

}