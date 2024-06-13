import { ExternalLink } from "../../../components/ExternalLink";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";

export function Profile() {
  return (
    <ProfileContainer>
      <ProfilePicture src="https://avatars.githubusercontent.com/u/108071236?v=4" />
      <ProfileDetails>
        <h1>Henrique Xavier</h1>
        
        <ExternalLink text="Github" href="#" />
      </ProfileDetails>
    </ProfileContainer>
  )
}