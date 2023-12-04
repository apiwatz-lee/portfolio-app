import React from 'react'
import { useEffect } from 'react'
import { useDisclosure } from "@chakra-ui/react";
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
  } from "@chakra-ui/react";

const ContactAlertDialog = ({handleSubmit,isSubmit,handleCancel}) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    console.log(isSubmit);
    useEffect(()=>{

        if(isSubmit){
            onOpen();
        }else{
            onClose();
        }

    },[isSubmit])


    return (
        <>
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}>

                <AlertDialogOverlay>
                    <AlertDialogContent>

                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Confirmation 
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Thanks for messaging me, is your information correct?
                        </AlertDialogBody>

                        <AlertDialogFooter className='flex gap-5'>
                            <button className='p-2 rounded-xl bg-red-800 text-white' ref={cancelRef} onClick={handleCancel}>
                                Cancel
                            </button>
                            <button className='p-2 rounded-xl bg-teal-800 text-white' onClick={handleSubmit} ml={3}>
                                Correct
                            </button>
                        </AlertDialogFooter>

                    </AlertDialogContent>
                </AlertDialogOverlay>

            </AlertDialog>
        </>
    )
}

export default ContactAlertDialog