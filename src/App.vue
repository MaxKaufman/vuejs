<template>
    <div>
        <app-car>
            <h2 slot="title">{{ carName }}</h2>
            <p slot="text">Lorem ipsum dolor.</p>
        </app-car>
    </div>
</template>

<script>
    //new content
    import Car from './Car.vue'
    import Counter from './Counter.vue'

    export default {
        data() {
            return {
                carName: 'Tesla'
            }
        },
        components: {
            appCar: Car,
        },
    }
</script>

<style scoped>

</style>
