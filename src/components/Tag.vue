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
        font-size: 14px;
        border-radius: 5px;
    }

    .highlight {
        background-color: crimson!important;
        color: white!important;
        border-color: crimson!important;
    }

    .highlight .close-button {
        filter: invert(100%);
    }

    .close-button {
        background-image: url('~@/assets/cancel.svg');
        height: 8px;
        width: 8px;
        background-size: 100%;
        background-color: transparent;
        border: none;
        margin-left: 5px;
        outline: none;
        cursor: pointer;
    }
</style>