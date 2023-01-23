import styles from '@/styles/Home.module.css'
import Image from 'next/image'


export default function Home() {
  return(
    <div className={styles.card}>
      <Image src='/image-qr-code.png' width={50} height={50} className={styles['card-qr']}></Image>
      <h1 className={styles['card-title']}></h1>
      <p className={styles['card-description']}></p>
    </div>
  )
}
