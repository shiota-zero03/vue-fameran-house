<script setup>
    import Swal from 'sweetalert2';
    import { ref } from 'vue';

    const formLogin = ref({
        email: '',
        password: '',
        remember: false
    });

    const errorLogin = ref({
        email: null,
        password: null
    })

    const validLogin = ref(true)

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    const validationSubmit = () => {

        validLogin.value = true;
        errorLogin.value.email = null;
        errorLogin.value.password = null;

        if (!formLogin.value.email) {
            errorLogin.value.email = 'Email is required.';
            validLogin.value = false;
        } else if (!validateEmail(formLogin.value.email)) {
            errorLogin.value.email = 'Please enter a valid email address.';
            validLogin.value = false;
        }

        if (!formLogin.value.password) {
            errorLogin.value.password = 'Password is required.';
            validLogin.value = false;
        } else if (formLogin.value.password.length < 6) {
            errorLogin.value.password = 'Password must be at least 6 characters long.';
            validLogin.value = false;
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        validationSubmit()

        if(validLogin.value) {
            if(formLogin.value.remember) {
                localStorage.setItem('login_save', JSON.stringify(formLogin.value))
            } else {
                localStorage.removeItem('login_save')
            }
            Swal.fire({
                text: 'Login successfully',
                icon: 'success'
            })
        } else {
            Swal.fire({
                text: 'Please fill out all required form',
                icon: 'error'
            })
        }
    }

    const getDataRemember = () => {
        const remember_data = localStorage.getItem('login_save');
        if(remember_data) {
            formLogin.value = JSON.parse(remember_data)
        }
    }
    getDataRemember()
</script>
<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <div class="flex items-center justify-center mb-3">
                <div class="h-px bg-[#ac0000] flex-1"></div>
                <span class="mx-4 text-lg font-bold gradient-text-label-auth uppercase">LOGIN</span>
                <div class="h-px bg-[#ac0000] flex-1"></div>
            </div>
            <div class="form-group mb-2.5">
                <div class="relative">
                    <input v-model="formLogin.email" type="text" id="email" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-[#363891] bg-transparent rounded-lg border-1 border-[#363891] appearance-none focus:outline-none focus:ring-0 focus:border-[#363891] peer border" placeholder="" />
                    <label for="email" class="absolute text-sm text-[#363891] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#363891] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Email</label>
                </div>
                <small class="text-red-600 italic text-xs">{{ errorLogin.email }}</small>
            </div>
            <div class="form-group mb-2.5">
                <div class="relative">
                    <input v-model="formLogin.password" type="password" id="password" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-[#363891] bg-transparent rounded-lg border-1 border-[#363891] appearance-none focus:outline-none focus:ring-0 focus:border-[#363891] peer border" placeholder="" />
                    <label for="password" class="absolute text-sm text-[#363891] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#363891] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Password</label>
                </div>
                <small class="text-red-600 italic text-xs">{{ errorLogin.password }}</small>
            </div>
            <div class="form-group mb-2.5">
                <div class="flex items-center justify-between">
                    <div class="flex items-center me-3">
                        <input v-model="formLogin.remember" type="checkbox" id="check_remember">
                        <label for="check_remember" class="ms-2 text-sm text-[#363891]">Remember Me</label>
                    </div>
                    <div class="ms-3 flex items-center">
                        <a href="/forgot-password" class="hover:underline text-sm text-blue-800">Forgot Password ?</a>
                    </div>
                </div>
            </div>
            <div class="form-group mb-2.5">
                <div class="relative">
                    <button class="w-full bg-[#363891] text-white py-2 rounded-lg hover:bg-[#36389199] duration-300">Login</button>
                </div>
            </div>
            <div class="form-group mb-2.5 text-center text-sm text-[#363891]">
                don't have an account ? <a class="hover:underline text-sm text-blue-800" href="/register">Register here</a>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'Login'
    }
</script>
  