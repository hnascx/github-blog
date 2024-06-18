import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { ExternalLink } from '../../../../components/ExternalLink'
import { PostHeaderContainer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCalendar,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

export function PostHeader() {
  const navigate = useNavigate()

  function goBack() {
    navigate(-1) // Volta uma rota
  }

  return (
    <PostHeaderContainer>
      <header>
        <ExternalLink
          as="button"
          onClick={goBack}
          icon={<FontAwesomeIcon icon={faChevronLeft} />}
          text="Voltar"
          variant="iconLeft"
        />
        <ExternalLink text="Ver no Github" href="#" target="_blank" />
      </header>

      <h1>JavaScript data types and data structures</h1>
      <ul>
        <li>
          <FontAwesomeIcon icon={faGithub} />
          hnascx
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendar} />1 day ago
        </li>
        <li>
          <FontAwesomeIcon icon={faComment} />5 comments
        </li>
      </ul>
    </PostHeaderContainer>
  )
}
