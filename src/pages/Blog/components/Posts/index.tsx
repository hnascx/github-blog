import { PostContainer } from "./styles";

export function Post() {
  return (
    <PostContainer to="/post/1">
      <div>
        <strong>JavaScript data types and data structures</strong>
        <span>1 day ago</span>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nemo quibusdam ratione eligendi. Id quo quia similique nesciunt reprehenderit, illum molestias voluptatum tempore ab libero! Expedita libero, quo ducimus eveniet accusantium illo, aliquam nulla dolor aperiam tempora porro unde nostrum!
      </p>
    </PostContainer>
  )
}