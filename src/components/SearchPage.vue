<template>
    <div>this is a test again {{$store.state.counter}}</div>
     <div>this is a test {{$store.state.data}}</div>
</template>

<script>

export default{
    data(){
        return {
         query_data: ''
        }
    },
   created() {
    this.query_data = this.$route.query.q
   
   }
}
</script>