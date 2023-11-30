import React from 'react'

const Mas = () => {
  return (
    <div>
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">Informacion sobre SmartLearn</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">¿Que es SmartLearn?</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
               SmartLearn es una plataforma dedicada al aprendizaje, con nosotros encontraras de todo tipo de cursos completamente gratis,
               nuestra prioridad es que nuestros estudiantes aprendan de una manera que no se les dificulte, 
               y sobre todo que se les garantice aprendizaje.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                Nuestros maestros seran los encargados de dejarte lecciones, al igual que tus tareas; estas tendran una fecha de vencimiento,
                las clases seran a tu agrado, tu podras elegir las que más llamen tu atencion o las que más necesites.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">¿Que tipo de cursos tenemos? </strong> 
                    Con nosotros encontraras de todo tipo de cursos, desde cursos de ingles a cursos de matematicas, así como cursos de música o incluso dibujo, todo lo que puedas imaginar. 
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">¿Te interesa ser maestro pero no terminaste una carrera? </strong> 
                    Para tener un curso no necesitas tener una, solo necesitas tener unos conocimientos basicos, 
                    y muchas ganas de ayudar.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Los alumnos podran innteractuar entre ellos, solamente en la clase que tengan en común, ahí podran aclararse alguna duda que 
                llegaran a tener, al igual que podran aclarar dudas de otros estudiantes. 
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">¿No tienes tiempo? Aquí no importa. </h2>
              <p className="mt-6">
                Si no tienes tiempo para estudiar, no te preocupes, aquí tu eres dueño de tus lecciones, tu podrás ver y realizar tus lecciones 
                a la hora que puedas y más se te acomode, podras ingresar cuando quieras y el tiempo que quieras, no tenemos un limite de tiempo 
                ni un maximo de tiempo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>  
    </div>
  )
}

export default Mas
