import { Todo } from "@/services/types";

export interface TodosTableProps {
  todosList: Todo[];
}

export interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  todo: Todo | undefined;
}
