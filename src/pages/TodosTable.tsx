import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Tag,
  TagLabel,
  Button,
  HStack,
  useDisclosure,
} from "@chakra-ui/react";
import { TodosTableProps } from "./types";
import { useDeleteTodoMutation } from "@/services/todoService";
import EditModal from "./EditModal";
import { useState } from "react";
import { Todo } from "@/services/types";

export default function TododsTable(props: TodosTableProps) {
  const { todosList } = props;
  const [deleteTodo] = useDeleteTodoMutation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [editTodo, setEditTodo] = useState<Todo | undefined>();

  const onDeleteTodo = (id: number) => {
    deleteTodo(id);
  };

  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>id</Th>
              <Th>title</Th>
              <Th>description</Th>
              <Th>status</Th>
              <Th>actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {todosList?.map((todo) => {
              return (
                <Tr key={todo.id}>
                  <Td>{todo.id}</Td>
                  <Td>{todo.title}</Td>
                  <Td>{todo.description}</Td>

                  <Td>
                    <Tag
                      variant="outline"
                      colorScheme={todo.done ? "green" : "red"}
                    >
                      <TagLabel>{todo.done ? "done" : "not done"}</TagLabel>
                    </Tag>
                  </Td>
                  <Td>
                    <HStack>
                      <Button
                        w={"min-content"}
                        onClick={() => {
                          setEditTodo(todo);
                          onOpen();
                        }}
                      >
                        edit
                      </Button>
                      <Button
                        w={"min-content"}
                        onClick={() => onDeleteTodo(todo.id)}
                      >
                        delete
                      </Button>
                    </HStack>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <EditModal
        isOpen={isOpen && !!editTodo}
        onClose={onClose}
        todo={editTodo}
      />
    </>
  );
}
