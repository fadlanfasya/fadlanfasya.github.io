<template>
    <header class="container mx-auto p-4">
    <nav class="bg-gray-800 pt-6">
        <div class="flex items-center justify-between">
            <a href="/" class="text-ashgray hover:text-black font-bold text-4xl">FADLAN</a>
            <div class="hidden md:block">
                <ul class="flex space-x-6 font-semibold">
                    <li class="text-ashgray hover:text-black"><a href="/about">About Me</a></li>
                    <li class="text-ashgray hover:text-black"><a href="#">Portofolio</a></li>
                    <li class="text-ashgray hover:text-black"><a href="#">Contact</a></li>
                </ul>
            </div>
            <div class="md:hidden">
                <button class="text-gray-400 hover:text-white" @click="showMenu = !showMenu">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
                        </path>
                    </svg>
                </button>
            </div>
        </div>
        <div class="md:hidden" v-if="showMenu">
            <ul class="bg-gray-800 text-white px-4 py-4">
                <li class="py-2"><a href="#" class="hover:text-gray-400">About Me</a></li>
                <li class="py-2"><a href="#" class="hover:text-gray-400">Portofolio</a></li>
                <li class="py-2"><a href="#" class="hover:text-gray-400">Contact</a></li>
            </ul>
        </div>
    </nav>
    </header>

    <div class="container mx-auto p-4">
        <hr style="color: #7c7c7c;">
    </div>
   
    <main class="container mx-auto p-4">
        <slot />
    </main>
</template>

<script>
export default {
    data() {
        return {
            showMenu: false
        };
    }
};
</script>