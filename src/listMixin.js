export default {
    data() {
        return {
            searchName: "",
            names: ['Alex', "Alex2", 'Kirill', 'Darya', 'Max']
        }
    },
    filters: {
        lowercase(value) {
            return value.toLowerCase()
        }
    },
    computed: {
        filteredNames() {
            return this.names.filter(name => {
                return name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1
            })
        }
    }
}