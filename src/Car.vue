<template>
    <div class="car">
        <h3>Name: {{ carName }}</h3>
        <h3>Reversed through COMPUTED: {{ reverseName }}</h3>
        <p>Year: {{ carYear }}</p>
    </div>
</template>

<script>

    export default {
        //props: ['carName', 'carYear'],
        props: {
            carName:  {
                type: String,
                default: 'Tesla _default-child'
            },
            carYear: {
                type: Number,
                required: true
            }
        },
        computed: {
            reverseName() {
                return this.carName.split('').reverse().join('')
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