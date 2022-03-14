import { FC, useEffect, useState } from "react"
//! Firebase
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore"
import { auth, db } from "../../firebase-config"
//! Types
import type {
  DocumentData,
  QuerySnapshot,
  CollectionReference,
} from "firebase/firestore"
//! Styles
import { Wrapper } from "./Home.styles"

type HomeProps = {
  isAuth?: string | null | boolean
}

type PostList = {
  id: string
  author?: {
    id?: string
    name?: string
  }
  postText?: string
  title?: string
}

const Home: FC<HomeProps> = ({ isAuth }: HomeProps): JSX.Element => {
  const [postLists, setPostList] = useState<PostList[]>([])
  const postsCollectionRef: CollectionReference<DocumentData> = collection(
    db,
    "posts"
  )

  const deletePost = async (id: string): Promise<void> =>
    await deleteDoc(doc(db, "posts", id))

  useEffect(() => {
    const getPosts = async (): Promise<void> => {
      const data: QuerySnapshot<DocumentData> =
        await getDocs<DocumentData>(postsCollectionRef)
      setPostList(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    }

    getPosts()
  }, [deletePost])

  return (
    <Wrapper>
      {postLists.map(post => (
        <div className="post" key={post.id}>
          <div className="postHeader">
            <div className="title">
              <h1>{post.title}</h1>
            </div>
            <div className="deletePost">
              {isAuth && post.author?.id === auth.currentUser?.uid && (
                <button onClick={() => deletePost(post?.id)}>
                  &#128465;
                </button>
              )}
            </div>
          </div>
          <div className="postTextContainer">{post.postText}</div>
          <h3>- {post.author?.name}</h3>
        </div>
      ))}
    </Wrapper>
  )
}

export default Home
