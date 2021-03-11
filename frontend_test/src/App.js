import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import Click from './components/Click'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline'
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form'

function App() {
  return (
    <div className="App">
      <Form />
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <Inline /> */}
      {/* <Stylesheet primary={true}/> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <Click /> */}
      {/* <FunctionClick /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name="Tzuyu" nickname="Yoda">
        <p>This is children props</p>
      </Greet>
      <Greet name="Mina" nickname="Minarii">
        <button>Dance</button>
      </Greet>
      <Greet name="Nayeon" nickname="Nabong" /> */}
      {/* <Welcome name="Momo" nickname="Momoring"/>
      <Welcome name="Sana" nickname="Sanake"/> */}
    </div>
  );
}

export default App;
