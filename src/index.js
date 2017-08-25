import unity from './Unity.vue'

const install = Vue => {
  Vue.component('unity', unity)
}

unity.install = install

let instance = unity.data().gameInstance

const message = (gameObject, method, param) => {
  if (param === null) {
    param = ''
  }
  if (UnityInstance !== null) {
    instance.SendMessage (
      gameObject,
      method,
      param)
  } else {
    console.warn('vue-unity-webgl: you\'ve sent a message to the Unity content, but it wasn\t instantiated yet.')
  }
}

export const Unity = unity
export const Message = message
export const Instance = instance

export default Unity
