export const emailValidator = email => {
    return email &&
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
            .test(email)
}

export const passwordLengthValidator = password => {
    if (password) return password.length >= 6
    else return null
}

export const isEqual = (left, right) => {
    if (left && right) return left.localeCompare(right) === 0
    else return null
}