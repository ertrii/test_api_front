export default async (catchErr, states, header) => {
  const { login } = header.actions
  if (!catchErr.response) {
    states.message(catchErr.message)
  }
  if (login) {
    states.message(catchErr.response.data.msg)
  }
}
