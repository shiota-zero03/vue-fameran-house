<script setup>
    import Swal from 'sweetalert2';
    import { ref } from 'vue';

    const formRegister = ref({
        email: '',
        password: '',
        password_confirmation: '',
        agreement: false
    });

    const errorRegister = ref({
        email: null,
        password: null,
        password_confirmation: null,
        agreement: null
    })

    const validLogin = ref(true)

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    const validationSubmit = () => {

        validLogin.value = true;
        errorRegister.value.email = null;
        errorRegister.value.password = null;
        errorRegister.value.password_confirmation = null;
        errorRegister.agreement = null;

        if (!formRegister.value.email) {
            errorRegister.value.email = 'Email is required.';
            validLogin.value = false;
        } else if (!validateEmail(formRegister.value.email)) {
            errorRegister.value.email = 'Please enter a valid email address.';
            validLogin.value = false;
        }

        if (!formRegister.value.password) {
            errorRegister.value.password = 'Password is required.';
            validLogin.value = false;
        } else if (formRegister.value.password.length < 6) {
            errorRegister.value.password = 'Password must be at least 6 characters long.';
            validLogin.value = false;
        } else if(formRegister.value.password !== formRegister.value.password_confirmation) {
            errorRegister.value.password = "Confirmation password is didn't match.";
        }

        if (!formRegister.value.password_confirmation) {
            errorRegister.value.password_confirmation = 'Password confirmation is required.';
            validLogin.value = false;
        }

        if (!formRegister.value.agreement) {
            errorRegister.value.agreement = 'Please check the agreement.';
            validLogin.value = false;
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        validationSubmit()

        if(validLogin.value) {
            Swal.fire({
                text: 'Register successfully',
                icon: 'success'
            }).then(() => {
                window.location.href='/login'
            })
        } else {
            Swal.fire({
                text: 'Please fill out all required form',
                icon: 'error'
            })
        }
    }

</script>
<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <div class="flex items-center justify-center mb-3">
                <div class="h-px bg-[#ac0000] flex-1"></div>
                <span class="mx-4 text-lg font-bold gradient-text-label-auth uppercase">Register</span>
                <div class="h-px bg-[#ac0000] flex-1"></div>
            </div>
            <div class="form-group mb-2.5">
                <div class="relative">
                    <input v-model="formRegister.email" type="text" id="email" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-[#363891] bg-transparent rounded-lg border-1 border-[#363891] appearance-none focus:outline-none focus:ring-0 focus:border-[#363891] peer border" placeholder="" />
                    <label for="email" class="absolute text-sm text-[#363891] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#363891] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Email</label>
                </div>
                <small class="text-red-600 italic text-xs">{{ errorRegister.email }}</small>
            </div>
            <div class="form-group mb-2.5">
                <div class="relative">
                    <input v-model="formRegister.password" type="password" id="password" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-[#363891] bg-transparent rounded-lg border-1 border-[#363891] appearance-none focus:outline-none focus:ring-0 focus:border-[#363891] peer border" placeholder="" />
                    <label for="password" class="absolute text-sm text-[#363891] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#363891] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Password</label>
                </div>
                <small class="text-red-600 italic text-xs">{{ errorRegister.password }}</small>
            </div>
            <div class="form-group mb-2.5">
                <div class="relative">
                    <input v-model="formRegister.password_confirmation" type="password" id="password_confirmation" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-[#363891] bg-transparent rounded-lg border-1 border-[#363891] appearance-none focus:outline-none focus:ring-0 focus:border-[#363891] peer border" placeholder="" />
                    <label for="password_confirmation" class="absolute text-sm text-[#363891] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#363891] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Password Confirmation</label>
                </div>
                <small class="text-red-600 italic text-xs">{{ errorRegister.password_confirmation }}</small>
            </div>
            <div class="form-group mb-2.5">
                <div class="flex items-center justify-between">
                    <div class="flex items-center me-3">
                        <input v-model="formRegister.agreement" type="checkbox" id="check_remember">
                        <label for="check_remember" class="ms-2 text-sm text-[#363891]">I agree for the <a href="" class="underline">terms of service and agreement</a></label>
                    </div>
                </div>
                <small class="text-red-600 italic text-xs">{{ errorRegister.agreement }}</small>
            </div>
            <div class="form-group mb-2.5">
                <div class="relative">
                    <button class="w-full bg-[#363891] text-white py-2 rounded-lg hover:bg-[#36389199] duration-300">Register</button>
                </div>
            </div>
            <div class="form-group mb-2.5 text-center text-sm text-[#363891]">
                already have an account ? <a class="hover:underline text-sm text-blue-800" href="/login">Login here</a>
            </div>
        </form>
    </div>
</template>
  
<script>
    export default {
        name: 'Register'
    }
</script>
  