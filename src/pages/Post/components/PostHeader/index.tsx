import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ExternalLink } from "../../../../components/ExternalLink";
import { PostHeaderContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faComment } from "@fortawesome/free-solid-svg-icons";

export function PostHeader() {
  return (
    <PostHeaderContainer>
      <header>
        <ExternalLink text="Voltar" href="#" />
        <ExternalLink text="Ver no Github" href="#" target="_blank" />
      </header>

      <h1>JavaScript data types and data structures</h1>
      <ul>
        <li>
          <FontAwesomeIcon icon={faGithub} />
          hnascx
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendar} />
          1 day ago
        </li>
        <li>
          <FontAwesomeIcon icon={faComment} />
          5 comments
        </li>
      </ul>
    </PostHeaderContainer>
  )
}