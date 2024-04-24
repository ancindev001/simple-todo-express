export type TodoDto = {
  title: string;
  description: string;
};

export type TodoCreationDto = Required<TodoDto>;
export type TodoUpdateDto = Partial<TodoDto>;

export type TodoResponseDto = {
  message: string;
  error: boolean;
  data?: any[] | null;
};
