
import { createRoot } from 'react-dom/client'
import App from './App';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';



const root = document.getElementById('root');
const store = setupStore();
if (!root) {
    console.log('root is not found')
    throw new Error('root is not found');
}

const container = createRoot(root);
container.render(<Provider store={store}>
    <App />
</Provider>
);