<template>
    <div class="Map container">
        <img :src="map">
    </div>
</template>

<script>

export default {
    name: 'Map',
    data() {
        return {
            id: this.$route.query.id,
            map: '',
        }
    },
    created() {
        this.setupData();
    },
    methods: {
        setupData: function () {
            this.$http.fetch`GetOinActivityMap${{
                'id': parseInt(this.id),
            }}
                ${json => {
                this.map = json
            }}`;
        }
    }
}
</script>
