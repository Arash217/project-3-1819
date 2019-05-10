<template>
    <ul class="suggested-tags">
        <li v-for="tag in value">
            <button @click="$emit('input', tag)" class="suggested-tag">
                {{ tag }}
            </button>
        </li>
    </ul>
</template>

<script>
    export default {
        props: [
            'value'
        ],
    }
</script>

<style scoped>
    .suggested-tags {
        list-style: none;
        background-color: #2c3e50;
        color: white;
        width: 100%;
    }

    .suggested-tag {
        width: 100%;
        height: 100%;
        padding: 6px;
        background-color: transparent;
        border: none;
        text-align: left;
        cursor: pointer;
        font-size: 14px;
        outline: none;
    }

    .suggested-tag:hover, .suggested-tag:focus {
        background-color: #ffd931;
    }
</style>