<template>
    <li :class="{highlight: toBeDeleted}">
        <span>{{ text }}</span>
        <button class="close-button" @click="$emit('input', text)"></button>
    </li>
</template>

<script>
    export default {
        props: [
            'text',
            'toBeDeleted'
        ]
    }
</script>

<style scoped>
    li {
        padding: 5px 8px;
        margin: 2px;
        background-color: #2c3e50;
        color: white;
        font-size: 14px;
    }

    .highlight {
        background-color: crimson;
    }

    .close-button {
        background-image: url('~@/assets/cancel.svg');
        height: 8px;
        width: 8px;
        background-size: 100%;
        background-color: transparent;
        border: none;
        filter: invert(100%);
        margin-left: 5px;
        outline: none;
        cursor: pointer;
    }

    .close-button:hover {
        filter: invert(100%) brightness(500%);
    }
</style>