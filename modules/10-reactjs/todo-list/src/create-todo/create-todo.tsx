import React, { useState } from 'react'

export function CreateTodo({ onSubmit }: { onSubmit: (todoText: string) => void }) {
  const [todoText, setTodoText] = useState('')

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        onSubmit(todoText)
        setTodoText('')
      }}
    >
      <label>
        Todo
        <input value={todoText} onChange={event => setTodoText(event.target.value)} />
      </label>
      <button onClick={() => setTodoText('')}>Clear todo</button>
      <button type="submit">Create todo</button>
    </form>
  )
}