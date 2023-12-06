import { useState } from "react"
import { Post } from "../../components/post"
import { HomeContainer } from "./styles"

export function Home() {
  const [comments, setComments] = useState([])
  const [newCommentText, setNewCommentText] = useState("")

  function handleCreateNewComment() {
    event?.preventDefault()
    setComments([...comments, newCommentText])
    setNewCommentText("")
  }

  function handleNewCommentChange() {
    setNewCommentText(event?.target.value)
  }

  return (
    <HomeContainer>
      <form onSubmit={handleCreateNewComment}>
        <input
          name="comment"
          value={newCommentText}
          onChange={handleNewCommentChange}
        />
        <button type="submit">Postar comentário</button>
      </form>
      {comments.map((i) => {
        return <Post text={i} />
      })}
    </HomeContainer>
  )
}
