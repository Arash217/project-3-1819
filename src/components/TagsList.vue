<template>
    <ul>
        <li v-for="tag in value">
            <button @click="$emit('input', tag)">{{ tag }}</button>
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
    ul {
        list-style: none;
        background-color: #2c3e50;
        color: white;
    }

    button {
        width: 100%;
        height: 100%;
        padding: 5px;
        background-color: transparent;
        border: none;
        color: white;
        text-align: left;
        cursor: pointer;
        font-size: 14px;
        outline: none;
    }

    button:hover, button:focus {
        background-color: #ffdb15;
    }
</style>