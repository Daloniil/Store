export const required = value => {
    if (value) {
        return undefined
    } else if (!value) {
        return "Це обов'язкове поле"
    }
}

export const maxLenghtCrater = (maxLenght) => value => {
    if (value.length > maxLenght || isNaN(Number(value))) {
        return `Не вірний номер телефона`
    }
    return undefined

}



