const navegacion = document.querySelector('#navegacion');
const navScroll = document.querySelector('#navContent');

const crearNavHome = ()=>{
    navegacion.innerHTML = `
    <header class="LogoI hidden lg:flex font-bold flex-col pl-3 m-2">
                <nav> 
                    <a href='/'>
                            <h2 class=" text-white text-3xl text-center">GMP</h2>
                            <p class=" text-white text-xl text-center border-t border-red-600">Idiomas Modernos</p>    
                        </a>
                    </div>
                    <div class="my-auto lg:m-auto">
                        <a href='/'>
                            <div class="pb-2 px-2 border-b xl:ml-5 rounded-full border-red-600">
                                <img src="/IMG/logo trans.svg" alt="Logo" class="LogoC w-16 animate-bounce hover:animate-none">
                            </div>
                        </a>
                    </div>
                </nav>
                <button class="py-5 font-serif border-0 p- m-0">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        id="abrirMenu"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-10 h-10 text-blue-100 cursor-pointer md:hidden hover:bg-indigo-300 rounded-lg hover:text-black
                        hover:duration-200 hover:transition hover:ease-in-out">
                        <path stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                
                    <!--Menu para Movil-->
                    <div class="menuMovil py-44 fixed top-0 right-0 left-0 bottom-0 justify-around items-center flex-col overflow-y-auto 
                    hover:transition hover:ease-in-out hidden lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg"
                        id = "cerrarMenu"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="sectionMovil w-10 h-10 text-blue-100 cursor-pointer sm:hidden hover:bg-indigo-300 rounded-lg hover:text-black
                        hover:transition hover:ease-in-out hover:duration-200 absolute">
                        <path stroke-linecap="round" 
                        stroke-linejoin="round" 
                        d="M6 18L18 6M6 6l12 12" /> />
                    </svg>
                        <div class="hover:border-y rounded-lg hover:border-y-red-600 hover:transition hover:ease-linear hover:duration-300 w-7/12 flex justify-center item">
                            <div class="gap-10 flex flex-col my-3 py-2 w-8/12">
                                <a href="/registro/" class="text-black text-2xl font-bold bg-indigo-300 hover:bg-indigo-700 py-2 px-4 rounded-lg transition ease-in-out  hover:text-white">Regístrate</a>
                            </div>    
                        </div>
                        <div class="hover:border-y rounded-lg hover:border-y-red-600 hover:transition hover:ease-linear hover:duration-300 w-7/12 flex justify-center item">
                            <div class="gap-10 flex flex-col my-3 py-2 w-8/12">
                                <a href="/login/"    class="text-white text-2xl font-bold hover:bg-indigo-300 py-2 px-4 rounded-lg transition ease-in-out hover:text-black">Iniciar Sesión</a>
                            </div>    
                        </div>
                </button>
                
                    <!--Menu para PC-->
                    <nav class="hidden md:flex flex-row gap-6">
                        <div class="pb-2 hover:border-b rounded-lg hover:border-b-red-600 hover:transition hover:ease-linear hover:duration-300">
                            <a href="/registro/" class=" block text-black text-2xl font-bold bg-indigo-300 hover:bg-indigo-700 py-2 px-4 rounded-lg hover:transition hover:ease-in-out  hover:text-white">Regístrate</a>
                        </div>
                        <div class="pb-2 hover:border-b rounded-lg hover:border-b-red-600 hover:transition hover:ease-linear hover:duration-300">
                            <a href="/login/" class="block text-white text-xl font-bold hover:bg-indigo-300 py-2 px-4 rounded-lg hover:transition hover:ease-in-out hover:text-black" title="Entrar">
                                <svg xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke-width="1.5" 
                                stroke="currentColor" 
                                class="w-8 h-8 text-white hover:text-black">
                                    <path stroke-linecap="round" 
                                    stroke-linejoin="round" 
                                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                                </svg>     
                            </a>
                        </div>
                    </nav>
                
                </header>
    `
}

const crearNavRegistro = ()=>{
    navegacion.innerHTML = `
    <div class="LogoI hidden lg:flex font-bold flex-col pl-3 m-2">
                    <a href='/'>
                        <h2 class=" text-white text-3xl text-center">GMP</h2>
                        <p class=" text-white text-xl text-center border-t border-red-600">Idiomas Modernos</p>    
                    </a>
                </div>
                <div class="my-auto lg:m-auto">
                    <a href='/'>
                        <div class="pb-2 px-2 border-b xl:mr-10 rounded-full border-red-600">
                            <img src="/IMG/logo trans.svg" alt="Logo" class="LogoCentral w-16 animate-bounce duration-300 hover:animate-none">
                        </div>
                    </a>
                </div>
                <div class="py-5 font-serif">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        id="abrirMenu"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-10 h-10 text-blue-100 cursor-pointer md:hidden hover:bg-indigo-300 rounded-lg hover:text-black
                        hover:duration-200 transition ease-in-out">
                        <path stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                
                    <!--Menu para Movil-->
                    <div class="menuMovil py-44 fixed top-0 right-0 left-0 bottom-0 justify-around items-center flex-col overflow-y-auto 
                    transition-all ease-in-out hidden lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg"
                        id = "cerrarMenu"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="sectionMovil w-10 h-10 text-blue-100 cursor-pointer md:hidden hover:bg-indigo-300 rounded-lg hover:text-black
                        transition ease-in-out hover:duration-200 absolute">
                        <path stroke-linecap="round" 
                        stroke-linejoin="round" 
                        d="M6 18L18 6M6 6l12 12" /> />
                    </svg>
                        <div class="hover:border-y rounded-lg hover:border-y-red-600 hover:transition hover:ease-linear hover:duration-300 w-7/12 flex justify-center item">
                            <div class="gap-10 flex flex-col my-3 py-2 w-8/12">
                                <a href="/login/"    class="text-white text-2xl font-bold hover:bg-indigo-300 py-2 px-4 rounded-lg transition ease-in-out hover:text-black">Iniciar Sesión</a>
                            </div>    
                        </div>
                    </div>
                
                    <!--Menu para PC-->
                    <div class="hidden md:flex flex-row gap-6">
                        <div class="pb-2 hover:border-b rounded-lg hover:border-b-red-600 hover:transition hover:ease-linear hover:duration-300">
                            <a href="/login/" class="block text-white text-xl font-bold hover:bg-indigo-300 py-2 px-4 rounded-lg transition ease-in-out hover:text-black" title="Entrar">
                                <svg xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke-width="1.5" 
                                stroke="currentColor" 
                                class="w-8 h-8 text-white hover:text-black">
                                    <path stroke-linecap="round" 
                                    stroke-linejoin="round" 
                                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                                </svg>     
                            </a>
                        </div>
                    </div>
                
                </div>
    `
}

const crearNavLogin = ()=>{
    navegacion.innerHTML = `
    <div class="LogoI hidden lg:flex font-bold flex-col pl-3 m-2">
                    <a href='/'>
                        <h2 class=" text-white text-3xl text-center">GMP</h2>
                        <p class=" text-white text-xl text-center border-t border-red-600">Idiomas Modernos</p>    
                    </a>
                </div>
                <div class="my-auto lg:m-auto">
                    <a href='/'>
                        <div class="pb-2 px-2 border-b xl:ml-5 rounded-full border-red-600">
                            <img src="/IMG/logo trans.svg" alt="Logo" class="LogoC w-16 animate-bounce duration-300 hover:animate-none">
                        </div>
                    </a>
                </div>
                <div class="py-5 font-serif">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        id="abrirMenu"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-10 h-10 text-blue-100 cursor-pointer md:hidden hover:bg-indigo-300 rounded-lg hover:text-black
                        hover:duration-200 transition ease-in-out">
                        <path stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                
                    <!--Menu para Movil-->
                    <div class="menuMovil py-44 fixed top-0 right-0 left-0 bottom-0 justify-around items-center flex-col overflow-y-auto 
                    transition-all ease-in-out hidden lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg"
                        id = "cerrarMenu"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="sectionMovil w-10 h-10 text-blue-100 cursor-pointer md:hidden hover:bg-indigo-300 rounded-lg hover:text-black
                        transition ease-in-out hover:duration-200 absolute">
                        <path stroke-linecap="round" 
                        stroke-linejoin="round" 
                        d="M6 18L18 6M6 6l12 12" /> />
                    </svg>
                        <div class="hover:border-y rounded-lg hover:border-y-red-600 hover:transition hover:ease-linear hover:duration-300 w-7/12 flex justify-center item">
                            <div class="gap-10 flex flex-col my-3 py-2 w-8/12">
                                <a href="/registro/" class="text-black text-2xl font-bold bg-indigo-300 hover:bg-indigo-700 py-2 px-4 rounded-lg transition ease-in-out  hover:text-white">Regístrate</a>
                            </div>    
                        </div>
                    </div>
                
                    <!--Menu para PC-->
                    <div class="hidden md:flex flex-row gap-6">
                        <div class="pb-2 hover:border-b rounded-lg hover:border-b-red-600 hover:transition hover:ease-linear hover:duration-300">
                            <a href="/registro/" class=" block text-black text-2xl font-bold bg-indigo-300 hover:bg-indigo-700 py-2 px-4 rounded-lg transition ease-in-out  hover:text-white">Regístrate</a>
                        </div>
                </div>
    `
}

if(window.location.pathname === '/'){
    
    //crear la barra de navegacion para la pagina de home
    crearNavHome();
}else if(window.location.pathname === '/registro/'){

    //crear la barra de navegacion para la pagina de registro
    crearNavRegistro();
}else if(window.location.pathname === '/login/'){

    //crear la barra de navegacion para la pagina de login
    crearNavLogin();
}

const navBtn = navegacion.children[2];
//console.log(navegacion.children[2]);

window.onload = ()=>{
    navBtn.addEventListener('click', e=>{
        //console.log(navegacion.children[2].children[1])
        const menuMobile = navegacion.children[2].children[1];
    
        if(!navBtn.classList.contains('active')){
    
            //menu movil cerrado y vamos a mostrarlo
            navBtn.classList.add('active');
            menuMobile.classList.remove('hidden');
            menuMobile.classList.add('flex')
        }else{
            navBtn.classList.remove('active');
            menuMobile.classList.add('hidden');
            menuMobile.classList.remove('flex');
        }
    })
    
}
