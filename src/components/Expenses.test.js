import { fireEvent, render, screen } from "@testing-library/react"
import Expenses from "./Expenses"

jest.mock('./ExpenseFilter', () => {
    return (props) => {
        return (
            <div>
                <button data-testid="yearBtn" onClick={() => props.onSelectedyear('2021')}>
                    Mock Year
                </button>
            </div>
        )
    }
})

test('render Expenses Component', () => {

    render(<Expenses expenses={[{date : new Date(), title : "Book"}]} filterData={[]} setFilterData={jest.fn()} />)

    fireEvent.click(screen.getByTestId('yearBtn'))
})