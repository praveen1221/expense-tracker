import { fireEvent, render, screen } from "@testing-library/react"
import App from "./App"

// Mocking the NewExpense component
jest.mock('./components/NewExpense/NewExpense', () => {
    return (props) => {
        return (
            <div>
                <button data-testid="btn" onClick={() => props.onaddexpense({ id: 'e1', title: 'Mock Item', amount: 100, date: new Date() })}>
                    Add Mock Expense
                </button>
            </div>
        );
    };
});

test('render App Component', () => {

    render(<App />)

    fireEvent.click(screen.getByTestId('btn'))
})