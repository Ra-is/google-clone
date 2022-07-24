<template>
    <div class="flex mx-2 mt-6">
        <div class="flex space-x-4 flex-1">
            <img src="../../public/google.png" class="w-[10%]"/>
            <input type="text" class="rounded-full w-1/2 py-4 outline outline-1 outline-[#dfe1e5] hover:drop-shadow-md px-2" v-model="search_text">

        </div>
         <div class="flex space-x-3 justify-end items-center m-4">
      <div class="group">
    <a href="#" class="">Gmail</a>
    <div class="border border-b-1 border-black opacity-0 group-hover:opacity-100"></div>
     </div>
     <div class="group">
    <a href="#" class="">Email</a>
    <div class="border border-b-1 border-black opacity-0 group-hover:opacity-100"></div>
     </div>
  
    <div class="rounded-full bg-green-900 w-10 h-10 flex flex-col items-center justify-center">
     <div class="rounded-full bg-green-900 w-6 h-6 border-4 border-white"></div>
    </div>
    </div>
    </div>
    <!-- search section -->
    <div class="flex flex-col mx-2 mt-6">
      <!-- tabs -->
      <div class="flex space-x-3 items-center">
             <!-- move everything to be inline with the search items -->
             <div class="w-[10%]"></div>
         <div class="group">
    <a href="#" class="">All</a>
    <div class="border border-b-1 border-black opacity-0 group-hover:opacity-100"></div>
     </div>
      <div class="group">
    <a href="#" class="">Videos</a>
    <div class="border border-b-1 border-black opacity-0 group-hover:opacity-100"></div>
     </div>
      <div class="group">
    <a href="#" class="">News</a>
    <div class="border border-b-1 border-black opacity-0 group-hover:opacity-100"></div>
     </div>
      <div class="group">
    <a href="#" class="">Images</a>
    <div class="border border-b-1 border-black opacity-0 group-hover:opacity-100"></div>
     </div>
      <div class="group">
    <a href="#" class="">Maps</a>
    <div class="border border-b-1 border-black opacity-0 group-hover:opacity-100"></div>
     </div>
      <div class="group">
    <a href="#" class="">More</a>
    <div class="border border-b-1 border-black opacity-0 group-hover:opacity-100"></div>
     </div>
      </div>
      <!-- divided -->
      <div class="border  border-[#9aa0a6]">

      </div>
    </div>
</template>

<script>

export default{
    data(){
        return {
         query_data: '',
         search_text: ''
        }
    },
   created() {
    this.query_data = this.$route.query.q
    this.search_text = this.$route.query.q
   
   }
}
</script>