export const mappingUserData = data => ({
    name: data.displayName,
    email: data.email
})

export const mappingUserErrorInfo = err => ({
    errInfo: err.message
})