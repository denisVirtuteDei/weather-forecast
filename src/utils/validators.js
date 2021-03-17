export const emailValidator = email => email.length !== 0
    ? /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        .test(email)
        ? ''
        : 'Incorrect email'
    : ''

export const passwordLengthValidator = password => password &&
    password.length < 6
    ? 'Less than 6 symbols'
    : ''

export const isEqual = (left, right) => left && right &&
    left.localeCompare(right) !== 0
    ? 'Passwords aren\'t equal'
    : ''
