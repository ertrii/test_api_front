import init from './init'
import listen from './listen'

export default redity => {
  redity.init = init

  redity.onListen = listen

  return redity
}
