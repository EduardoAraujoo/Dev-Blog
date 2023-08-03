import styles from './Posts.module.scss'
import posts from '../../json/posts.json'
import { Link } from 'react-router-dom'

export default function Posts() {

    return (
        <main className={styles.main}>
            {posts.map(post => (                  
                       <Link
                       to={`posts/${post.id}`} 
                       key={post.id}>
                       <section className={styles.post}
                       >
                            <section                   
                                className={styles.post__image}
                                style={{ backgroundImage: `url(${post.image})` }}>
                                <article className={styles.filter}>
                                    <p className={styles.filter__text}>
                                        {post.filter}
                                    </p>
                                </article>
                            </section>
                            <article className={styles.post__texts}>
                                <h3 className={styles.post__title}>
                                    {post.title}
                                </h3>
                                <p className={styles.post__preview}>
                                    {post.preview}
                                </p>
                                <p className={styles.post__date}>
                                    {post.date}
                                </p>
                            </article>                          
                        </section>
                       </Link> 
                ))
            }
        </main >
    )
}