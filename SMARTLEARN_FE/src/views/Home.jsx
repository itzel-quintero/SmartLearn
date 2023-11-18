import React from 'react'
import {Image} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";
import {MailIcon} from './MailIcon.jsx';
import {LockIcon} from './LockIcon.jsx';
import {RadioGroup, Radio} from "@nextui-org/react";
import {User} from "@nextui-org/react";
import {Textarea} from "@nextui-org/react";
import {Listbox, ListboxItem} from "@nextui-org/react";
import {ListboxWrapper} from "./ListboxWrapper";
import {Card, CardBody} from "@nextui-org/react";
import {FaMailBulk} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const redirecTo =useNavigate();
  return (
    <div
    className={'flex'}>
      <>
    <Button onPress={onOpen} color="primary">Open</Button>
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
                endContent={
                  <FaMailBulk className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                label="Email"
                placeholder="Enter your email"
                variant="bordered"
              />
              <Input
                endContent={
                  <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
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
  </>
  <Button onPress={()=>
     redirecTo('/login')} color="primary">
      Iniciar Sesion
    </Button>
  <User   
      name="Itzel Quintero"
      description="Product Designer"
      avatarProps={{
        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
      }}
    />
        <Card>
      <CardBody>
        <p>Aprende lo que no sabes de una forma divertida</p>
      </CardBody>
    </Card>
    <ListboxWrapper>
      <Listbox
        aria-label="Example with disabled actions" 
        disabledKeys={["edit", "delete"]}
        onAction={(key) => alert(key)}
      >
        <ListboxItem key="new">New file</ListboxItem>
        <ListboxItem key="copy">Copy link</ListboxItem>
        <ListboxItem key="edit">Edit file</ListboxItem>
        <ListboxItem key="delete" className="text-danger" color="danger">
          Delete file
        </ListboxItem>
      </Listbox>
    </ListboxWrapper>
<Image
      isZoomed
      className={'min-h-[320px]'}
      alt="NextUI Fruit Image with Zoom"
      src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
    />
     <RadioGroup
      label="Seleccione su grado de estudio"
    >
      <Radio value="buenos-aires">Preescolar</Radio>
      <Radio value="sydney">Primaria</Radio>
      <Radio value="san-francisco">Secundaria</Radio>
      <Radio value="london">Preparatoria</Radio>
      <Radio value="tokyo">Universidad</Radio>
    </RadioGroup>
    <Textarea
      isRequired
      label="Description"
      labelPlacement="outside"
      placeholder="Enter your description"
      className="max-w-xs"
    />
    </div>
  )
}

export default Home;