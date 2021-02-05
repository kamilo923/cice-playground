import { FC, useState } from 'react'
import { Button } from '../../../../core/components/button/button'
import { Todo } from '../../domain/todo'
import { IsTodoDuplicatedUseCase } from '../../application/is-todo-duplicated-use-case'

interface Props {
  onCreate(todoText: string): void
  todos: Todo[]
}

export const TodoCreate: FC<Props> = ({ onCreate, todos }) => {
  const [todoText, setTodoText] = useState('')
  const isTodoDuplicated = new IsTodoDuplicatedUseCase().isTodoDuplicated(todos, todoText)

  const clearTodo = () => setTodoText('')

  return (
    <form
      name="Create todo"
      onSubmit={event => {
        event.preventDefault()
        onCreate(todoText)
        clearTodo()
      }}
    >
      <label>
        Todo
        <input value={todoText} onChange={event => setTodoText(event.target.value)} />
      </label>
      <Button onClick={clearTodo}>Clear todo</Button>
      <Button theme={'primary'} submit isDisabled={isTodoDuplicated}>
        Create todo
      </Button>
    </form>
  )
}
