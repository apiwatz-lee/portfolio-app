import React from 'react';
import { useEffect } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react';

const ContactAlertDialog = ({ handleSubmit, isSubmit, handleCancel }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  useEffect(() => {
    if (isSubmit) {
      onOpen();
    } else {
      onClose();
    }
  }, [isSubmit]);

  const message = {
    header: 'Confirmation',
    description:
      'Thank you for reaching out. Please be aware that this information will be sent directly to my email.',
    cancel: 'Cancel',
    corect: 'Got it!',
  };
  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              {message.header}
            </AlertDialogHeader>

            <AlertDialogBody>{message.description}</AlertDialogBody>

            <AlertDialogFooter className={`flex gap-5`}>
              <button
                className='p-2 rounded-xl bg-gray-400 text-white'
                ref={cancelRef}
                onClick={handleCancel}
              >
                {message.cancel}
              </button>
              <button
                className='p-2 rounded-xl bg-gray-800 text-white'
                onClick={handleSubmit}
                ml={3}
              >
                {message.corect}
              </button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default ContactAlertDialog;
