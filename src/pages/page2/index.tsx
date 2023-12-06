import { useState } from "react"
import { Post } from "../../components/post"

export function Page2() {
  const [comments, setComments] = useState([])
  const [commentText, setCommentText] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    setComments([...comments, commentText])
    setCommentText("")
  }

  function handleChange() {
    setCommentText(event?.target.value)
  }

  function deleteComment(params) {
    const newList = comments.filter((comment) => {
      return comment !== params
    })

    setComments(newList)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={commentText} />
        <button type="submit">Salvar</button>
      </form>
      {comments.map((comment) => {
        return (
          <Post key={comment} text={comment} deleteComment={deleteComment} />
        )
      })}
    </div>
  )
}
