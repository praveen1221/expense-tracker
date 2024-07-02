import { fireEvent, render, screen } from "@testing-library/react"
import ExpenseFilter from "./ExpenseFilter"

test('render Expenses Component', () => {

    render(<ExpenseFilter selected={"2021"} onSelectedyear={jest.fn()} expenses={[{ date: new Date(), title: "Book" }]} setFilterData={jest.fn()} searchTitle={"book"} setSearchTitle={jest.fn()} />)

    fireEvent.change(screen.getByTestId("searchInput"), { target: { value: "bo" } })

    fireEvent.change(screen.getByTestId("yearSelect"), { target: { value: "2001" } })
})