import { PostContainer, TextContainer } from "./styles"

export function Post({ text, deleteComment }: any) {
  function handleDelete() {
    deleteComment(text)
  }

  return (
    <PostContainer>
      <TextContainer>{text}</TextContainer>
      <button onClick={handleDelete}>Apagar</button>
    </PostContainer>
  )
}
