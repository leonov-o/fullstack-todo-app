import AddTodo from "./components/AddTodo.tsx";
import TodoList from "./components/TodoList.tsx";
import {QueryClientProvider, QueryClient} from "react-query";

const queryClient = new QueryClient();

function App() {

    return (
            <QueryClientProvider client={queryClient}>
                <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-4">
                    <div className="w-full max-w-md">
                        <AddTodo/>
                        <TodoList/>
                    </div>
                </div>
            </QueryClientProvider>
    )
}

export default App
