<template>
   <div class="flex flex-col min-h-screen">
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

  <div class="flex flex-col items-center justify-center h-[100%] space-y-3">
    <img src="../public/google.png"/>
    <input type="text" class="rounded-full w-1/2 py-4 outline outline-1 outline-[#dfe1e5] hover:drop-shadow-md"/>
    <div class="flex space-x-2">
    <div class="bg-[#f8f9fa] border-1 border-[#f8f9fa] p-3 px-4 rounded-md hover:border-[#c8d0d7] hover:border-2">Google Search</div>
    <div class="bg-[#f8f9fa] border-1 border-[#f8f9fa] p-3 px-4 rounded-md hover:border-[#c8d0d7] hover:border-2">I'm Feeling Lucky</div>
  
    </div>

    <div class="flex space-x-2">
     <p>Google offered in:</p> 
     <div class="group">
    <a href="#" class="text-blue-600">Hausa</a>
    <div class="border border-b-1 border-black opacity-0 group-hover:opacity-100"></div>
     </div>
     
     <div class="group">
    <a href="#" class="text-blue-600">Akan</a>
    <div class="border border-b-1 border-black opacity-0 group-hover:opacity-100"></div>
     </div>

     <div class="group">
    <a href="#" class="text-blue-600">Ewe</a>
    <div class="border border-b-1 border-black opacity-0 group-hover:opacity-100"></div>
     </div>

     <div class="group">
    <a href="#" class="text-blue-600">Ga</a>
    <div class="border border-b-1 border-black opacity-0 group-hover:opacity-100"></div>
     </div>
    </div>
  </div>
  
  <footer class="sticky top-[100%] bg-[#f2f2f2]">
    <div class="flex flex-col pt-3 pb-3">
      <p class="text-xl text-red-500">Ghana</p>
    <div class="border border-[#dadce0]"></div>
    <div class="flex justify-between">
     <div class="flex space-x-4 justify-around">
       <div class="group">
    <a href="#" class="">About</a>
    <div class="border border-b-1 border-black opacity-0 group-hover:opacity-100"></div>
     </div>
     <div class="group">
    <a href="#" class="">Advertising</a>
    <div class="border border-b-1 border-black opacity-0 group-hover:opacity-100"></div>
     </div>
     <div class="group">
    <a href="#" class="">Business</a>
    <div class="border border-b-1 border-black opacity-0 group-hover:opacity-100"></div>
     </div>
     <div class="group">
    <a href="#" class="">How Search works</a>
    <div class="border border-b-1 border-black opacity-0 group-hover:opacity-100"></div>
     </div>
     </div>

     <div class="flex space-x-4 justify-around">
       <div class="group">
    <a href="#" class="text-[#494444]">Privacy</a>
    <div class="border border-b-1 border-black opacity-0 group-hover:opacity-100"></div>
     </div>
     <div class="group">
    <a href="#" class="">Terms</a>
    <div class="border border-b-1 border-black opacity-0 group-hover:opacity-100"></div>
     </div>
     <div class="group">
    <a href="#" class="">Settings</a>
    <div class="border border-b-1 border-black opacity-0 group-hover:opacity-100"></div>
     </div>
     </div>
    </div>
    </div>
    
  </footer>
 </div>
</template>

<script>


export default {
  name: 'App',
 
}
</script>

<style>

</style>
