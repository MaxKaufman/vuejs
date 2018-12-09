<template>
    <div>
       <slot name="title"></slot>
        <hr>
        <slot name="text"></slot>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    div {
        padding: 9px;
        border: 1px dotted blue;
    }
    h2 {
        color: red;
    }
</style>