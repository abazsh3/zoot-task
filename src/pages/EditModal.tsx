import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  Input,
  Checkbox,
} from "@chakra-ui/react";
import { EditModalProps } from "./types";
import { useRef, LegacyRef } from "react";
import { Todo } from "@/services/types";
import { useEditTodoMutation } from "@/services/todoService";

export default function EditModal(props: EditModalProps) {
  const { isOpen, onClose, todo } = props;

  const titleInputRef: LegacyRef<HTMLInputElement> | undefined = useRef(null);
  const descriptionInputRef: LegacyRef<HTMLInputElement> | undefined =
    useRef(null);
  const doneCheckboxRef: LegacyRef<HTMLInputElement> | undefined = useRef(null);

  const [mutateEditTodo, editTodoResult] = useEditTodoMutation();

  if (!todo) {
    return <></>;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit todo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack>
            <Text mb="2px">title</Text>
            <Input ref={titleInputRef} defaultValue={todo.title} />
            <Text mb="2px">description</Text>
            <Input ref={descriptionInputRef} defaultValue={todo.description} />
            <Checkbox ref={doneCheckboxRef} defaultChecked={todo.done}>
              done
            </Checkbox>
          </Stack>
        </ModalBody>

        <ModalFooter>
          <Button
            onClick={() => {
              mutateEditTodo({
                ...todo,
                title: titleInputRef?.current?.value!,
                description: descriptionInputRef?.current?.value!,
                done: doneCheckboxRef?.current?.checked!,
              });
              onClose();
            }}
            colorScheme="blue"
            mr={3}
            isLoading={editTodoResult.isLoading}
          >
            submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
