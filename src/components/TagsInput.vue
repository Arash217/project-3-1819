<template>
    <div class="container">
        <ul class="tags">
            <tag :text="tagText" v-for="tagText in selectedTags" @input="removeTag"
                 :toBeDeleted="tagText === tagToBeDeleted" class="tag"/>
            <li class="input-container">
                <input class="tag-input" type="text"
                       v-model="search"
                       ref="search"
                       @input="filter"
                       @focus="filter"
                       @keypress.enter="handleInput"
                       @keydown.delete="handleDelete"
                       placeholder="Add a tag"
                />
            </li>
        </ul>
        <tags-list :value="filteredTags" @input="addTag"/>
    </div>
</template>

<script>
    import TagsList from './TagsList';
    import Tag from './Tag';

    export default {
        components: {
            TagsList,
            Tag
        },

        props: {
            suggestedTags: {
                type: Array,
                required: false
            }
        },

        data() {
            return {
                search: '',
                filteredTags: [],
                selectedTags: [],
                tagToBeDeleted: null,
                deleteTimer: null
            }
        },

        methods: {
            filter() {
                if (!this.search) {
                    this.filteredTags = [];
                    return;
                }

                const unaddedTags = this.suggestedTags.filter(tag => !this.selectedTags.includes(tag));
                this.filteredTags = unaddedTags.filter(tag => tag.includes(this.search));
            },

            handleDelete(e) {
                if (this.tagToBeDeleted) {
                    this.selectedTags.pop();
                    this.tagToBeDeleted = null;
                }

                if (e.code === 'Backspace' && this.search.length === 0) {
                    this.tagToBeDeleted = this.selectedTags[this.selectedTags.length - 1];
                    this.startDeleteTimer();
                }
            },

            startDeleteTimer() {
                clearTimeout(this.deleteTimer);
                this.deleteTimer = setTimeout(() => {
                    this.tagToBeDeleted = null
                }, 1000);
            },

            handleInput() {
                if (this.search.trim() !== '' && !this.selectedTags.includes(this.search)) {
                    this.addTag(this.search);
                }
            },

            addTag(selectedTag) {
                this.selectedTags.push(selectedTag);
                this.search = '';
                this.filter();
                this.$refs.search.focus();
                this.emitTags();
            },

            removeTag(tag) {
                this.selectedTags = this.selectedTags.filter(selectedTag => selectedTag !== tag);
                this.emitTags();
            },

            emitTags(){
                this.$emit('input', this.selectedTags);
            }
        },
    }
</script>

<style scoped>
    .container, ul {
        width: 500px;
    }

    .container {
        display: flex;
        flex-direction: column;
    }

    .input-container {
        display: flex;
        flex: 1 0 auto;
    }

    .tag-input {
        flex: 1 0 auto;
        min-width: 100px;
        padding: 0;
        margin: 5px;
        border: 0;
        outline: none;
        font-size: 14px;
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        line-height: 1em;
        list-style: none;
        border-bottom: 1px solid grey;
        padding: 5px;
    }
</style>