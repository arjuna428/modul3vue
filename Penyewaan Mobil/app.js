Vue.component('showform', {
    template: '#show-form',
    data(){
        return {
            data: { nama: '', email: '', wa: '', jenis: '', lama:''}
        }
    },
    methods: {
        simpan: function() {
            this.$emit('send-data', this.data);
            this.data.nama = "";
            this.data.email = "";
            this.data.wa = "";
            this.data.jenis = "";
            this.data.lama = "";
        }
    }
})

Vue.component('showdata', {
    template: '#showdata',
    props: ['data']
})

var app = new Vue({
    el: '#app',
    data: {
        kayma: {}
    },
    methods: {
        getData: function (value) {
            this.kayma = {
                nama : value.nama,
                email : value.email,
                wa : value.wa,
                jenis : value.jenis,
                lama : value.lama
            }
        }
    }
})
