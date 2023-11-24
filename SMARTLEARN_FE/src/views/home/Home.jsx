import React from 'react'
import { Button, Image } from '@nextui-org/react'
import { useNavigate } from 'react-router-dom'
import {Navbar, Link, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Checkbox, Input} from "@nextui-org/react";

const Home = () => {
  const redirectTo =useNavigate();
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
    <div className="bg-white">
        <div className="mx-auto max-w-7x1 py-24 sm:px-6 sm:py-4 lg:px-4">
          <div className="relative isolate overflow-hidden bg-pink-200 px-6 pt-16 shadow-3xl sm:rounded-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
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
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-5xl font-bold tracking-tight text-black sm:text-1x1">
                Aprendizaje Inteligente.
              </h2>
              <p className="mt-6 text-lg leading-6 text-black">
               <h9> Somos una empresa dedicada al aprendizaje, donde te ayudamos a cumplir el sueño de estudiar sin necesidad de estres, aburrimiento, y sobre todo garantizando aprendizaje :). </h9>
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a href="#" >                
                <Button onPress={() => redirectTo('/registro')} color="primary" variant="shadow">
                  Registrarme 
                  </Button>
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-black">
                <Button onPress={() => redirectTo('/mas')} color="black" variant="light">
                  Leer más <span aria-hidden="true">→</span>
                  </Button>
                </a>
               
              </div>
            </div>
            <img
            width={600}
            src="../../../public/smartlearn.png"
            alt=""
          />
                <Link onPress={onOpen} href="#"><p className="font-bold flex py-2 px-1 justify-between">Iniciar Sesion</p></Link>
          <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                />
                <Input
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  variant="bordered"
                />
                <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    Remember me
                  </Checkbox>
                  <Link color="primary" href="#" size="sm">
                    Forgot password?
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Sign in
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
          </div>
        </div>
      </div></>
  )
}

export default Home