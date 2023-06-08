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
  Stack,
} from "@chakra-ui/react";
import { TodosTableProps } from "./types";
import { useDeleteTodoMutation } from "@/services/todoService";

export default function TododsTable(props: TodosTableProps) {
  const { todosList } = props;
  const [deleteTodo] = useDeleteTodoMutation();

  const onDeleteTodo = (id: number) => {
    deleteTodo(id);
  };

  return (
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
                  <Stack>
                    <Button
                      w={"min-content"}
                      onClick={() => onDeleteTodo(todo.id)}
                    >
                      delete
                    </Button>
                  </Stack>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
