import styles from "./Dashboard.module.css";

import {Link} from "react-router-dom"
//hooks
import {useAuthValue} from "../../context/AuthContext" // importar informação do user
import {useFetchDocuments} from "../../hooks/useFetchDocuments" // importar o items/posts do user
import { useDeleteDocument } from "../../hooks/useDeleteDocuments";



const Dashboard = () => {
  const {user} = useAuthValue();
  const uid = user.div

  // posts do user
  const {documents: posts, loading} = useFetchDocuments("posts", null, uid);

  // iniciar o hook useDeleteDocument:
  const {deleteDocument} = useDeleteDocument("posts"); // posts é a collection do firebase


  

  if (loading) {
    return <p>Carregando...</p>
    
  }

  return (
    <div className={styles.dashboard}>
        <h2>Dashboard</h2>
        <p>Gerencie os seus posts</p>
        {posts && posts.length === 0 ? (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts</p>
            <Link to="/posts/create" className="btn">
              Criar novo post
            </Link>
          </div>
        ): (
          <>
            <div className={styles.post_header}>
              <span>Título</span>
              <span>Ações</span>            
            
            </div>
            {posts &&
              posts.map((post) => (
                <div className={styles.post_row} key={post.id}>
                  <p>{post.title}</p>
                  <div className={styles.actions}>
                    <Link to={`/posts/${post.id}`} className="btn btn-outline">
                      Ver
                    </Link>
                    <Link to={`/edit/${post.id}`} className="btn btn-outline">
                      Editar
                    </Link>
                    <button 
                      onClick={() => deleteDocument(post.id)} 
                      className="btn btn-outline btn-danger">
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
          </>


        )}

    </div>
  )
}

export default Dashboard