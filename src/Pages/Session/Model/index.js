import init from './init'
import listen from './listen'
import fail from './fail'

export default redity => {
  redity.init = init

  redity.onListen = listen
  redity.onFail = fail

  return redity
}
