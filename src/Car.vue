<template>
    <div class="car">
        <h3>Name: {{ carName }}</h3>
        <p>Year: {{ carYear }}</p>
    </div>
</template>

<script>

    export default {
        props: ['carName', 'carYear'],
        data() {
            return {
                //carName: 'Tesla',
                //carYear: '2018'
            }
        }
    }

</script>

<style>
    .car {
        border: 1px dotted cornflowerblue;
        padding: 5px;
    }
</style>