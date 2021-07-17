const app = Vue.createApp({
    data(){
        return{
            firstName   : 'Lois',
            lastName    : 'Bassey',
            email       : 'loisbassey@gmail.com',
            gender      : 'female',
            picture     : 'https://lh3.googleusercontent.com/ogw/ADea4I5fN3vkBLCN1guuVeS2WiKJMr5E75t-KZIW-p0-RA=s190-c-mo'
        }
    },
    methods:{
        async getUser(){
            const res = await fetch('https://randomuser.me/api')
            const {results} = await res.json()

            this.firstName  = results[0].name.first
            this.lastName   = results[0].name.last
            this.email      = results[0].email
            this.gender     = results[0].gender
            this.picture    = results[0].picture.large
        }
    }
});

app.mount('#app');

