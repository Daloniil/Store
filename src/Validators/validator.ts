export type FieldValidatorType = (value: string) => string | undefined


export const required: FieldValidatorType = (value) => {
    if (value) {
        return undefined
    } else if (!value) {
        return "Це обов'язкове поле"
    }
}

export const maxLenghtCrater = (maxLenght: number): FieldValidatorType => (value) => {
    if (value.length > maxLenght) {
        return `Не вірний номер телефона`
    } else if (isNaN(+value)) {
        return `Не вірний номер телефона`
    }
    return undefined

}







