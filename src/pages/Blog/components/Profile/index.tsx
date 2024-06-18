import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ExternalLink } from '../../../../components/ExternalLink'
import { ProfileContainer, ProfileDetails, ProfilePicture } from './styles'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function Profile() {
  return (
    <ProfileContainer>
      <ProfilePicture src="https://avatars.githubusercontent.com/u/108071236?v=4" />
      <ProfileDetails>
        <header>
          <h1>Henrique Xavier</h1>

          <ExternalLink text="Github" href="#" />
        </header>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          dolorum omnis officiis recusandae a, atque distinctio. Dolore!
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            hnascx
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            Building My Own Future
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            26 seguidores
          </li>
        </ul>
      </ProfileDetails>
    </ProfileContainer>
  )
}
