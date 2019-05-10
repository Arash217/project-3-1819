<template>
    <li :class="{highlight: toBeDeleted}">
        <div class="tag-content">
            <span @click="handleClick" ref="tagSpan" class="tag-span"
                  :class="{invisible: editMode}">{{ tagText }}</span>
            <input type="text" ref="tagInput" class="tag-edit"
                   v-model="tagText" v-show="editMode"
                   @input="handleInput" @keydown.enter="edit"
                   :style="{width: width}">
        </div>
        <div class="tag-actions">
            <button class="close-button" @click="$emit('input', tagText)" v-show="!editMode"></button>
            <button class="undo-button" @click="undo" v-show="editMode"></button>
        </div>
    </li>
</template>

<script>
    export default {
        props: [
            'text',
            'toBeDeleted'
        ],

        mounted() {
            this.tagText = this.text;
        },

        data() {
            return {
                editMode: false,
                tagText: '',
                width: null,
                originalTagText: ''
            }
        },

        methods: {
            handleClick() {
                this.editMode = true;
                this.originalTagText = this.tagText;
                this.handleInput();
            },

            handleInput() {
                this.$nextTick(() => {
                    this.width = this.$refs.tagSpan.getBoundingClientRect().width + 'px';
                    this.$refs.tagInput.focus();
                    this.$refs.tagInput.selectionStart = this.tagText.length;
                });
            },

            undo() {
                this.editMode = false;
                this.tagText = this.originalTagText;
            },

            edit() {
                if (this.tagText.length > 0){
                    this.$emit('edit', {
                        tag: this.originalTagText,
                        newTagText: this.tagText
                    });
                    this.editMode = false;
                }
            }
        },

        watch: {}
    }
</script>

<style scoped>
    li {
        padding: 5px 8px;
        margin: 2px;
        font-size: 14px;
        border-radius: 5px;
        line-height: 1.1em;
        display: flex;
    }

    .highlight {
        background-color: crimson !important;
        color: white !important;
        border-color: crimson !important;
    }

    .highlight .close-button {
        filter: invert(100%);
    }

    .close-button, .undo-button {
        background-size: 100%;
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
    }

    .close-button {
        background-image: url('~@/assets/cancel.svg');
        height: 8px;
        width: 8px;
    }

    .undo-button {
        background-image: url('~@/assets/undo.svg');
        height: 11px;
        width: 11px;
    }

    .tag-span {
        line-height: inherit;
    }

    .tag-edit {
        border: none;
        font-size: 14px;
        outline: none;
        line-height: inherit;
        background-color: transparent;
        color: inherit;
    }

    .tag-content, .tag-actions {
        display: flex;
        align-items: center;
    }

    .tag-content {
        position: relative;
    }

    .tag-actions {
        margin-left: 5px;
    }

    .invisible {
        overflow: hidden;
        position: absolute;
        white-space: pre;
        height: 0;
        padding-left: 10px;
    }
</style>