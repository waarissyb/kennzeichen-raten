import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import './index.css'

const MENU = [
  ['/play', 'Play the game'],
  ['/database', 'Explore the database'],
]

export default function Home() {
  return (
    <>
      <ol className="mainmenu">
        {MENU.map(([path, title]) => (
          <li key={path} className="mainmenu__item">
            <Link to={path}>
              <Button>{title}</Button>
            </Link>
          </li>
        ))}
      </ol>
    </>
  )
}
