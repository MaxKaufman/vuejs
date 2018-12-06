<template>
    <div>
        <h1>{{ carName }}</h1>

        <app-car
                :carName="carNamePar"
                :carYear="parentCarYear">
        </app-car>
    </div>
</template>

<script>
    import Car from './Car.vue'

    export default {
        data() {
            return {
                carNamePar: 'TESLA from parent',
                parentCarYear: "2099"
            }
        },
        components: {
            appCar: Car
        }
    }
</script>

<style>

</style>
