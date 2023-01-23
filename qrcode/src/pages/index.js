import styles from '@/styles/Home.module.css'
import Image from 'next/image'


export default function Home() {
  return(
    <div className={styles.card}>
      <Image className={styles['card-qr']}></Image>
      <h1 className={styles['card-title']}></h1>
      <p className={styles['card-description']}></p>
    </div>
  )
}
