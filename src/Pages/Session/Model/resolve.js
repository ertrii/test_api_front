export const isEmpty = form => {
  if (form.username === '' || form.password === '') {
    return 'Complete the required fields'
  }

  return false
}
