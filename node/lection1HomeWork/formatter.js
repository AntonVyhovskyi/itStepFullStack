const formatter = (text) => {
    if (typeof text !== 'string') {
        return ''; 
    }
   return text[0].toUpperCase() + text.slice(1).toLowerCase()
}
   



module.exports = formatter