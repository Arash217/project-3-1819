<template>
    <div>
        [
        <span v-for="element in array">
            {{element}},
        </span>
        ]
    </div>
</template>

<script>
    export default {
        props: [
            'array'
        ]
    }
</script>