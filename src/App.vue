<template>
    <div>
        <h1>{{ title }}</h1>

        <app-car
                :carName="carName"
                :carYear="parentCarYear">
        </app-car>
    </div>
</template>

<script>
    import Car from './Car.vue'

    export default {
        data() {
            return {
                title: 'Car Catalog',
                carName: 'Tesla _parent',
                parentCarYear: 2018
            }
        },
        components: {
            appCar: Car
        }
    }
</script>

<style>

</style>
