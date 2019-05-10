<template>
    <div id="app">
        <div class="theme-select-container">
            <label for="theme">Theme:</label>
            <select name="theme" id="theme" v-model="theme">
                <option value="dark">Dark</option>
                <option value="light">Light</option>
            </select>
        </div>
        <tags-input v-model="tags" :suggestedTags="suggestedTags" :class="themeClass"/>
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
                theme: 'dark',
                tags: [
                    'Higgsboson',
                    'Large Hadron Collider',
                    'European Organization for Nuclear Research',
                    'Antihydrogen',
                    'World Wide Web',
                    'Accelerators',
                    'Subatomic particles',
                    'Geneva',
                    'Proton'
                ],
                suggestedTags: [
                    'Black hole',
                    'Antimatter',
                    'Dark matter ',
                    'Universe'
                ]
            }
        },

        computed: {
            themeClass(){
                return 'theme-' + this.theme;
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
        font-size: 14px;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    .theme-select-container {
        margin-bottom: 50px;
    }

    .theme-select-container label {
        margin-right: 5px;
    }

    .theme-light .tag,
    .theme-dark .tag,
    .theme-light .suggested-tags,
    .theme-dark .suggested-tags,
    .theme-light .suggested-tag,
    .theme-dark .suggested-tag,
    .theme-light .tag .close-button,
    .theme-dark .tag .close-button,
    .theme-light .tag .undo-button,
    .theme-dark .tag .undo-button
    {
        transition: all .3s linear;
    }

    .theme-light .tag {
        background-color: white;
        color: #2c3e50;
        border: 1px solid #2c3e50;
    }

    .theme-dark .tag {
        background-color: #2c3e50;
        border: 1px solid #2c3e50;
        color: white;
    }

    .theme-light .suggested-tags {
        background-color: #ebebeb;
        border-style: solid;
        border-color: #2c3e50;
        border-width: 0 1px 1px 1px;
    }

    .theme-dark .suggested-tags {
        background-color: #2c3e50;
    }

    .theme-light .suggested-tag {
        color: #2c3e50;
    }

    .theme-dark .suggested-tag {
        color: white;
    }

    .theme-light .tag .close-button, .theme-light .tag .undo-button {
        filter: invert(-100%);
    }

    .theme-dark .tag .close-button, .theme-dark .tag .undo-button  {
        filter: invert(100%);
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
