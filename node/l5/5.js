class Storage {
    getItem(string) {
        if (!this[string]) {
            return undefined
        } else {
            return this[string]
        }
    }

    setItem(key, values){
        this[key] = values;
        return this[key]
    }

    removeItem(key) {
        delete this[key]
    }
}


global.storage = new Storage()


global.storage.setItem('item', 'values')
console.log(global.storage.getItem('item'));

global.storage.removeItem('item')
console.log(global.storage.getItem('item'));