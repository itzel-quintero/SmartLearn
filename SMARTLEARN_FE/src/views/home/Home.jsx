import React from 'react'
import { Button } from '@nextui-org/react'
import { useNavigate } from 'react-router-dom'
import {Link, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Checkbox, Input} from "@nextui-org/react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";

const Home = () => {
  const redirectTo =useNavigate();
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
    <div className="bg-white">
        <div className="mx-auto max-w-2x1 py-40 sm:px-9 sm:py-3 lg:px-9">
          <div className="relative isolate overflow-hidden bg-pink-200 px-6 pt-16 shadow-3xl sm:rounded-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-20 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#fffacd" />
                  <stop offset={1} stopColor="#4b0082" />
                </radialGradient>
              </defs>
            </svg>
            
            <div className="mx-auto max-w-md lg:mx-0 text-center lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-5xl font-bold text-black sm:text-1x1">
                Aprendizaje Inteligente.
              </h2>
              <p className="mt-6 text-lg leading-6 text-black">
               <h9> Somos una empresa dedicada al aprendizaje, donde te ayudamos a cumplir el sueño de estudiar sin necesidad de estres, aburrimiento, y sobre todo garantizando aprendizaje :). </h9>
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a href="#" className="text-sm font-semibold leading-6 text-black">
                <Button onPress={() => redirectTo('/mas')} color="black" variant="light">
                  Leer más <span aria-hidden="true">→</span>
                  </Button>
                </a>
    <Button as={Link} onPress={onOpen} color="primary" variant="shadow"> 
                  <p>Iniciar Sesion</p>
                </Button>
                
          <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Iniciar Sesion</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="Correo electronico"
                  placeholder="Ingresa tu correo electronico"
                  variant="bordered"
                />
                <Input
                  label="Contraseña"
                  placeholder="Ingresa tu contraseña"
                  type="password"
                  variant="bordered"
                />
                <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    Recuérdame
                  </Checkbox>
                  <Link color="primary" href="#" size="sm">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Cerrar
                </Button>
                <Button color="primary" onPress={onClose}>
                  Iniciar sesion 
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
                <a href="#" >                
                  <Dropdown>
      <DropdownTrigger>
        <Button color="primary" variant="shadow">
          Registrarme como
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        aria-label="Action event example" 
        onAction={(key) => alert(key)}
      >
        <DropdownItem onPress={() => redirectTo('/maestros')} key="maestro">Maestro</DropdownItem>
        <DropdownItem onPress={() => redirectTo('/alumnos')} key="alumno">Alumno</DropdownItem>
      </DropdownMenu>
    </Dropdown>
                </a>
              </div>
            </div>
            <div className="-ml-60 -mt-30 p-10 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-9 lg:row-start- lg:overflow-hidden">
          <img 
            className="w-[80rem] rounded-xl sm:w-[80rem]"
            src="../../../public/smartlearn.png"
            alt=""
          />
        </div>
          </div>
        </div>
      </div></>
  )
}

export default Home