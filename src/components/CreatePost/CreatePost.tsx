import { FC, useState, useEffect } from "react"
//! Firebase
import { addDoc, collection } from "firebase/firestore"
import { db, auth } from "../../firebase-config"
//! Router function
import { useNavigate } from "react-router-dom"
//! Types
import type { CollectionReference, DocumentData } from "firebase/firestore"
import type { NavigateFunction } from "react-router-dom"
//! Styles
import { Wrapper } from "./CreatePost.styles"

type CreatePostProps = {
  isAuth?: string | null | boolean
}

const CreatePost: FC<CreatePostProps> = ({
  isAuth,
}: CreatePostProps): JSX.Element => {
  const [title, setTitle] = useState<string>("")
  const [postText, setPostText] = useState<string>("")

  const postsCollectionRef: CollectionReference<DocumentData> = collection(
    db,
    "posts"
  )
  let navigate: NavigateFunction = useNavigate()

  const createPost = async (): Promise<void> => {
    await addDoc<DocumentData>(postsCollectionRef, {
      title,
      postText,
      author: {
        name: auth.currentUser?.displayName,
        id: auth.currentUser?.uid,
      },
    })
    navigate("/")
  }

  //prettier-ignore
  useEffect(() => { if (!isAuth) navigate("/login") }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value)

  const handleTextAreaChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => setPostText(e.target.value)

  return (
    <Wrapper>
      <div className="createPostContainer">
        <h1>Create A Post</h1>
        <div className="inputPost">
          <label>Title:</label>
          <input placeholder="Title..." onChange={handleInputChange} />
        </div>
        <div className="inputPost">
          <label>Post:</label>
          <textarea
            placeholder="Post..."
            onChange={handleTextAreaChange}
          />
        </div>
        <button onClick={createPost}>Submit Post</button>
      </div>
    </Wrapper>
  )
}

export default CreatePost
