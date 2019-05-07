<template>
    <div id="app">
        <tags-input v-model="tags" :suggestedTags="suggestedTags" class="tags-input"/>
        <div class="array-viewer-container">
            <span class="array-viewer-title">Suggested tags:</span>
            <array-viewer class="array-viewer" :array="suggestedTags"/>
        </div>
        <div class="array-viewer-container">
            <span class="array-viewer-title">Selected tags:</span>
            <array-viewer class="array-viewer" :array="tags"/>
        </div>
    </div>
</template>

<script>
    import TagsInput from './components/TagsInput.vue'
    import ArrayViewer from './components/ArrayViewer.vue'

    export default {
        components: {
            TagsInput,
            ArrayViewer
        },

        data() {
            return {
                tags: [],
                suggestedTags: [
                    'test',
                    'hello',
                    'hello2',
                ]
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    .tags-input {
        margin: auto;
    }

    .array-viewer-container {
        margin-top: 50px;
    }

    .array-viewer-title {
        margin-bottom: 10px;
        display: inline-block;
    }

    .array-viewer {
        max-width: 200px;
        margin: auto;
    }
</style>
