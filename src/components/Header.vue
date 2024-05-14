<script setup>
    defineProps({
        webName: String,
    })

    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import { faSearch } from '@fortawesome/free-solid-svg-icons';
    import { ref } from 'vue';

    const formData = ref({
        search: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Search Data : '+formData.value.search)
    }

    const navigateToLogin = () => {
        const login_url = import.meta.env.VITE_APP_ADMIN_URL;
        window.location.href = login_url;
    }
</script>

<template>
    <div>
        <header class="bg-white">
            <div id="logo-bar" class="border-b-[1px]">
                <div class="lg:mx-[10rem] md:mx-[5rem] mx-4">
                    <div class="flex items-center justify-between w-full py-3">
                        <div class="flex items-center">
                            <img src="../assets/images/logo-now.png" alt="" class="md:w-[100px] w-[65px]">
                            <div class="text-[#363891] ms-3 md:block hidden">
                                <div class="font-bold lg:text-[24px] md:text-[20px] poetsen-one mb-[-10px]">
                                    You're satisfied
                                </div>
                                <div class="font-bold lg:text-[24px] md:text-[20px] poetsen-one md:ms-[5rem] mt-[-10px]">
                                    We're happy
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <form @submit.prevent="handleSubmit" class="relative lg:block hidden me-5">
                                <input required v-model="formData.search" type="text" name="search_data" id="search" class="md:w-[250px] w-[150px] border-b-[2px] md:py-3 py-1 md:px-4 px-3 border-[#363891] rounded outline-none text-[#363891] placeholder:text-[#36389195] italic" placeholder="Search ...">
                                <button><FontAwesomeIcon :icon="faSearch" class="text-[#363891] absolute right-[10px] top-[50%] translate-y-[-50%]" /></button>
                            </form>
                            <a href="/login" class="cursor-pointer bg-[#363891] hover:bg-[#36389199] duration-[.2s] rounded py-2 px-5 text-white border-0 outline-none">Login</a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="menu-bar" class="bg-[#69696960]">
                <div class="lg:mx-[10rem] md:mx-[5rem] mx-4">
                    be
                </div>
            </div>
            <!-- <div class="md:container md:mx-auto mx-4">
                <div class="md:flex items-center justify-between w-full py-3">
                    <div class="lg:w-[60%] md:w-[100%]">
                        <h1 class="md:text-[2.25rem] font-bold leading-[40px]">Maximize Your Career and Business Growth Potential with Professional Custom Website Development</h1>
                        <h2 class="italic font-semibold leading-[20px] mt-2 mb-3">Prepare yourself to have a website that captivates visitors, converts prospects into customers, and dominates your industry.</h2>
                        <button class="font-semibold hover:bg-blue-200 py-1 px-4 rounded-2xl border-2 border-black">Send your order to us</button>
                    </div>
                    <div class="lg:w-[40%] md:w-[100%]">
                        <div class="md:bg-white bg-slate-100 md:border-2 md:border-black md:p-5 rounded-xl p-5 shadow-xl md:ms-5">
                            <form @submit.prevent="submitForm">
                                <div class="form-title">
                                    <h5 class="font-bold md:text-[1.5rem] text-[1.2rem]">Let's realize your dream</h5>
                                    <h5 class="font-bold md:text-[1.5rem] text-[1.2rem]">Website with us</h5>
                                </div>
                                <br />
                                <div class="form-content">
                                    <div class="form-group">
                                        <div class="relative">
                                            <input v-model="formData.name" type="text" id="floating_name" class="block px-2.5 md:pb-2 md:pt-4 pb-1.5 pt-3 w-full md:text-lg text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                            <label for="floating_name" class="absolute text-sm md:text-lg font-semibold text-gray-500 duration-300 transform md:-translate-y-5 -translate-y-3.5 scale-75 top-1 z-10 origin-[0] md:bg-white bg-slate-100 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 md:peer-placeholder-shown:top-6 peer-placeholder-shown:top-5 peer-focus:top-1 peer-focus:scale-75 md:peer-focus:-translate-y-5 peer-focus:-translate-y-2.5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Name <span class="text-red-500">*</span></label>
                                        </div>
                                        <div id="error_name" class="mx-2 text-red-500 italic mb-4">
                                            <small class="text-[.9rem]" v-if="formError.name">{{ formError.name }}</small>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="relative">
                                            <input v-model="formData.email" type="text" id="floating_email" class="block px-2.5 md:pb-2 md:pt-4 pb-1.5 pt-3 w-full md:text-lg text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                            <label for="floating_email" class="absolute text-sm md:text-lg font-semibold text-gray-500 duration-300 transform md:-translate-y-5 -translate-y-3.5 scale-75 top-1 z-10 origin-[0] md:bg-white bg-slate-100 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 md:peer-placeholder-shown:top-6 peer-placeholder-shown:top-5 peer-focus:top-1 peer-focus:scale-75 md:peer-focus:-translate-y-5 peer-focus:-translate-y-2.5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Email <span class="text-red-500">*</span></label>
                                        </div>
                                        <div id="error_email" class="mx-2 text-red-500 italic mb-4">
                                            <small class="text-[.9rem]" v-if="formError.email">{{ formError.email }}</small>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="relative">
                                            <input v-model="formData.whatsapp" type="number" id="floating_whatsapp" class="block px-2.5 md:pb-2 md:pt-4 pb-1.5 pt-3 w-full md:text-lg text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                            <label for="floating_whatsapp" class="absolute text-sm md:text-lg font-semibold text-gray-500 duration-300 transform md:-translate-y-5 -translate-y-3.5 scale-75 top-1 z-10 origin-[0] md:bg-white bg-slate-100 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 md:peer-placeholder-shown:top-6 peer-placeholder-shown:top-5 peer-focus:top-1 peer-focus:scale-75 md:peer-focus:-translate-y-5 peer-focus:-translate-y-2.5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Whatsapp Number <span class="text-red-500">*</span></label>
                                        </div>
                                        <div id="error_whatsapp" class="mx-2 text-red-500 italic mb-4">
                                            <small class="text-[.9rem]" v-if="formError.whatsapp">{{ formError.whatsapp }}</small>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="relative">
                                            <input v-model="formData.institution" type="text" id="floating_institution" class="block px-2.5 md:pb-2 md:pt-4 pb-1.5 pt-3 w-full md:text-lg text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                                            <label for="floating_institution" class="absolute text-sm md:text-lg font-semibold text-gray-500 duration-300 transform md:-translate-y-5 -translate-y-3.5 scale-75 top-1 z-10 origin-[0] md:bg-white bg-slate-100 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 md:peer-placeholder-shown:top-6 peer-placeholder-shown:top-5 peer-focus:top-1 peer-focus:scale-75 md:peer-focus:-translate-y-5 peer-focus:-translate-y-2.5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Institution</label>
                                        </div>
                                        <div id="error_institution" class="mx-2 text-red-500 italic mb-4 text-[.8rem]"></div>
                                    </div>
                                    <div class="form-group">
                                        <div class="relative">
                                            <textarea v-model="formData.message" id="floating_message" rows="3" class="block px-2.5 md:pb-2 md:pt-4 pb-1.5 pt-3 w-full md:text-lg text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " ></textarea>
                                            <label for="floating_message" class="absolute text-sm md:text-lg font-semibold text-gray-500 duration-300 transform md:-translate-y-5 -translate-y-3.5 scale-75 top-1 z-10 origin-[0] md:bg-white bg-slate-100 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 md:peer-placeholder-shown:top-6 peer-placeholder-shown:top-5 peer-focus:top-1 peer-focus:scale-75 md:peer-focus:-translate-y-5 peer-focus:-translate-y-2.5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Message <span class="text-red-500">*</span></label>
                                        </div>
                                        <div id="error_message" class="mx-2 text-red-500 italic mb-4">
                                            <small class="text-[.9rem]" v-if="formError.message">{{ formError.message }}</small>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <button type="submit" class="bg-gray-800 text-white font-semibold w-full py-2 rounded-xl">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div> -->
        </header>
    </div>
</template>