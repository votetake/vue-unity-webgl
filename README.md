# vue-unity-webgl

Easy to use Unity 5.6 or newer (also Unity 2017 or newer)  WebGL player component for your VueJS application. Embed your Unity application in your application for writing interactive interfaces with two way Unity and VueJS communication.

<img src="https://vuejs.org/images/logo.png" height="50px"/> <img src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Official_unity_logo.png" height="50px"/>

## Install

```Bash
npm install  https://github.com/votetake/vue-unity-webgl.git --save
```

## Usage
To get stated import the Unity component from `vue-unity-webgl`. Once imported you can use the Unity component to load in your Unity content. Place the Unity tag along with a src to the json file Unity exported.

```js
<template>
  <unity src="static/Build/game.json" width="1000" height="600" unityLoader="static/Build/UnityLoader.js"></unity>  
</template>

<script>
  import Unity from 'vue-unity-webgl'
  
  new Vue({
    components: { Unity }
  })
</script>
```
> ### Notice
> Don't forget to add a script tag to load the `UnityLoader.js` file if miss unityLoader attribute, exported by Unity in your base html file, index.html in example.



## Optional attributes

* `src` - Path to json build
* `width` - width div container
* `height` - height div container
* `unityLoader` - path to UnityLoader, with this


# Communication
Unity allows you to send Javascript messages to the Unity content. In order to do so using VueJs you have to add a ref to the `<unity>` tag, and call the `message(object, method, param)` method through `this.$refs`.

```js
<template>
  <unity src="static/Build/game.json" width="1000" height="600" unityLoader="static/Build/UnityLoader.js" ref="myInstance"></unity>  
</template>

<script>
import Unity from 'vue-unity-webgl'

new Vue({
  methods: {
    onClick () {
      this.$refs.myInstance.message("object", "method", "param")
    }
  }
})
</script>
```

# styling
The player will be injected in the a component with the class `unity-container`. To style to player use the following sass styling. To style the loader you can style the component with the class `unity-loader`. See the example below.

```scss
.unity {
    .unity-container {
        canvas {
            
        }
    }
    .unity-loader {
        .bar {
            .fill {
                /* the width will be set by the component */
            }
        }
    }
}
```

# html example
```html
<!DOCTYPE html>
<html>
    <head>
        <title>My Unity Game</title>
    </head>
    <body>
        <div id="app"></div>
    </body>
    <script src="Build/UnityLoader.js"></script>
    <script src="static/compiled/bundle.js"></script>
</html>
```