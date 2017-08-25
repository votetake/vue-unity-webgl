import Unity from './Unity.vue'

const install = function(Vue) {
    Vue.component('unity', Unity)
};

Unity.install = install

let Instance = null

const message = (gameObject, method, param) => {
    if (param === null) {
        param = ''
    }
    if (UnityInstance !== null) {
        UnityInstance.SendMessage (
            gameObject,
            method,
            param)
    } else {
        console.warn('vue-unity-webgl: you\'ve sent a message to the Unity content, but it wasn\t instantiated yet.')
    }
}


export const Unity = Unity
export const Message = message
export const UnityInstance = Instance

export default Unity
