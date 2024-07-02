import { fireEvent, render, screen } from "@testing-library/react"
import NewExpense from "./NewExpense";

jest.mock('./ExpenseForm', () => {
    return (props) => {
        return (<>
            <div>
                <button data-testid="submit" onClick={() => props.onsubmitform({ title: 'Mock Item', amount: 100, date: new Date() })}>
                    Expense Form
                </button>
            </div>
            <div>
                <button data-testid="submitEmpty" onClick={() => props.onsubmitform({ title: '', amount: '', date: '' })}>
                    Expense Form
                </button>
            </div>
        </>
        );
    };
});

test('render App Component', () => {

    render(<NewExpense onaddexpense={jest.fn()} />)

    fireEvent.click(screen.getByTestId('submit'))

    fireEvent.click(screen.getByTestId('submitEmpty'))

})