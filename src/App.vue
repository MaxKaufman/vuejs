<template>
    <div>
        <h1>{{ carName }}</h1>

        <app-car
                :carName="carName"
                :carYear="parentCarYear"
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
                carName: 'Tesla _parent',
                parentCarYear: 2018
            }
        },
        components: {
            appCar: Car
        },
        methods: {
            nameFromChild: function ($event) {
                return this.carName = $event
            }
        }
    }
</script>

<style>

</style>
