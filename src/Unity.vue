<template>
    <div class="webgl-content">
        <div id="unity-container" v-bind:style="{ width: width + 'px', height: height + 'px' }"></div>
        <div v-if="loaded == false">
            <div class="unity-loader">
                <div class="bar">
                    <div class="fill" v-bind:style="{ width: progress * 100 + '%'}"></div>
                </div>
            </div>
        </div>

        <div class="footer">
            <a @click.prevent="fullscreen">Fullscreen</a>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['src', 'module', 'width', 'height'],
        data () {
            return {
                gameInstance: null,
                loaded: false,
                progress: 0,
                error: null
            }
        },
        methods: {
            fullscreen () {
                UnityInstance.SetFullscreen(1)
            }
        },
        mounted () {
            if (typeof UnityLoader === 'undefined') {
                let error = 'The UnityLoader was not defined, please add the script tag ' +
                    'to the base html and embed the UnityLoader.js file Unity exported.'
                console.error(error)
                this.error = error
                return
            }
            if (this.src === null) {
                let error = 'Please provice a path to a valid JSON in the "src" attribute.'
                console.error(error)
                this.error = error
                return
            }
            let vm = this;
            this.gameInstance = UnityLoader.instantiate('unity-container', this.src, {onProgress: UnityProgress})
//      UnityInstance = UnityLoader.instantiate('unity-container', this.src, {
//        onProgress: ((gameInstance, progress) => {
//          this.loaded = (progress === 1)
//          this.progress = progress
//          console.log(progress)
//          console.log(gameInstance)
//        }),
//        Module : this.module
//      })
        }
    }

</script>