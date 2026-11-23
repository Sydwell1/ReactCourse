import Products from './Products'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap';

function formatName(user) {
  return user.firstName + ' ' + user.lastName
}

function App() {
  const user = {
    firstName: 'Greg',
    lastName: 'Tan',
    imageUrl: 'https://picsum.photos/200/150'
  }
  const isValid = true;

  return (
    <div>
      <h1>Hello, {formatName(user)}</h1>
      <img src={user.imageUrl}></img>
      <Products />
      <Button variant="danger" disabled={!isValid}>Default</Button>

    </div>
  )
}

export default App
