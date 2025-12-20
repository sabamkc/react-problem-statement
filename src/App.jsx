import { Counter } from "./components/Counter/Counter";
import { Form } from "./components/Form/Form";
import { HelloWorld } from "./components/HelloWorld/HelloWorld";
import './App.css'

export const App = () => {
    return (
        <div className={'main'}>
            <h1>App</h1>
            <HelloWorld />
            <Counter />
            <Form />
        </div>
    );
};