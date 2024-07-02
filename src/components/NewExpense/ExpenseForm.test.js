import { fireEvent, render, screen } from "@testing-library/react"
import ExpenseForm from "./ExpenseForm"

test('render Expenses Component', () => {

    render(<ExpenseForm onsubmitform={jest.fn()} />)

    fireEvent.change(screen.getByTestId("title"), { target: { value: "book" } })

    fireEvent.change(screen.getByTestId("amount"), { target: { value: "45" } })

    fireEvent.change(screen.getByTestId("date"), { target: { value: "2001-12-12" } })

    fireEvent.click(screen.getByTestId("submit"))

})