export interface User {

    "id": number,
    "name": string,
    "username": string,
    "email": string,
    "address": UserAdress,
    "phone": string,
    "website": string,
    "company": UserCompany
}




interface UserAdress {
    "street": string,
    "suite": string,
    "city": string,
    "zipcode": string,
    "geo": UserAdressGeo
}

interface UserAdressGeo {
    "lat": string,
    "lng": string
}





interface UserCompany {
    "name": string,
    "catchPhrase": string,
    "bs": string
}