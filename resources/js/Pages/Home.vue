<script setup>
import Layout from "../Layouts/Layout.vue";
import Profile from "../Layouts/Profile.vue";
</script>

<template>
    <Layout>
        <div class="grid grid-cols-2">
            <div class="flex flex-col lg:flex-row gap-8">
                <div class="flex flex-col gap-4">
                    <h2 class="text-xl font-bold text-ashgray">Hi, Im Fadlan Fasya!</h2>
                    <h3 class="text-2xl font-bold">Full Stack Developer</h3>
                    <p class="text-gray-600">Lorem ipsum dolor sit amet consectetur. Nisl in enim mauris vitae. Gravida enim
                        lorem nisl blandit. Donec sed aliquet nunc in at a ut. Enim venenatis quisque sed pellentesque amet.</p>
                    <div class="">
                        <button class="font-bold p-2 bg-black text-white hover:bg-ashgray rounded-md">Hire Me →</button>
                    </div>                       
                </div>
            </div>
            <div class="flex items-center justify-center">
                <Profile />
            </div>  
        </div>
    </Layout>
</template>