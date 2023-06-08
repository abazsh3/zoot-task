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
} from "@chakra-ui/react";
import { TodosTableProps } from "./types";

export default function TododsTable(props: TodosTableProps) {
  const { todosList } = props;

  return (
    <TableContainer>
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>id</Th>
            <Th>title</Th>
            <Th>description</Th>
            <Th>status</Th>
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
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
