<template>
    <div>
        <h1>{{ carName }}</h1>

        <app-car
                :carName="carName"
                :carYear="parentCarYear"
                :defName="setDefaultName"
                @nameChanged="nameFromChild($event)"
        >
        </app-car>
    </div>
</template>

<script>
    import Car from './Car.vue'

    export default {
        data() {
            return {
                title: 'Car Catalog',
                carName: 'Tesla',
                parentCarYear: 2018
            }
        },
        components: {
            appCar: Car
        },
        methods: {
            nameFromChild: function ($event) {
                this.carName = $event
            },
            setDefaultName: function () {
                this.carName = 'Tesla'
            }
        }
    }
</script>

<style>

</style>
