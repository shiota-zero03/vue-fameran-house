<template>
    <div class="auth-cover">
        <div class="flex items-center justify-center min-h-screen w-full lg:py-[3rem] md:py-[1rem] py-[2rem]">
            <div class="flex items-center md:grid-cols-2 rounded-lg overflow-hidden bg-white h-[100%]">
                <div class="md:p-[1rem]">
                    <div class="md:px-[3rem] px-[2rem]">
                        <div class="flex justify-center w-[100%] md:mb-3">
                            <a href="/">
                                <img src="../../assets/images/logo-now.png" class="md:w-[200px] w-[150px]" />
                            </a>
                        </div>
                        <main>
                            <router-view />
                        </main>
                    </div>
                </div>
                <div class="md:block hidden md:p-[1rem] border-s-[1px] border-[#00000050]">
                    <div class="flex justify-center w-[100%] items-center h-[100%] md:px-[3rem] px-[2rem]">
                        <img src="../../assets/images/login-vector.png" class="lg:w-[250px] md:w-[200px]" />
                    </div>
                </div>
            </div>
        </div>  
    </div>
  </template>
  
  <script>
  export default {
    name: 'AuthTheme'
  }
  </script>
  