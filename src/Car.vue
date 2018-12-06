<template>
    <div class="car">
        <h3>Name: {{ carName }}</h3>
        <h3>Reversed through COMPUTED: {{ reverseName }}</h3>
        <p>Year: {{ carYear }}</p>
        <input type="text" v-model="newName">
        <button @click="changeName">Change name</button>
        <button @click="defName()">Change to default (from parent)</button>
    </div>
</template>

<script>

    export default {
        //props: ['carName', 'carYear'],
        data() {
          return {
              newName: 'asd'
          }
        },
        props: {
            carName:  {
                type: String,
                default: 'Tesla _default-child'
            },
            carYear: {
                type: Number,
                required: true
            },
            defName: Function
        },
        computed: {
            reverseName() {
                return this.carName.split('').reverse().join('')
            }
        },
        methods: {
            changeName() {
                this.carName = this.newName;
                this.$emit('nameChanged', this.carName)
            }
        }
    }

</script>

<style>
    body {
        font-family: 'Georgia', 'Arial', sans-serif;
        font-size: 16px;
        color: rgb(48, 48, 48);
        background: #ed3a65;
    }
    .car {
        margin: 20px auto;
        width: 50%;
        border: 1px dotted #12ed0d;
        padding: 5px;
        background: rebeccapurple;
        color: rgb(215, 215, 215);
    }
</style>