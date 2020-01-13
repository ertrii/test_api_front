export default async (payload, states, header) => {
  const { logout } = header.actions
  const session = header.models.session
  if (logout) {
    session.dispatchers.logout()
  }
}
