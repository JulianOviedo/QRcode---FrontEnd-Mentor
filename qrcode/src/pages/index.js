import styles from '@/styles/Home.module.css'
import Image from 'next/image'


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <div className={styles['card-qr__container']}>
          <Image src='/image-qr-code.png' fill className={styles['card-qr']}></Image>
        </div>
        <div className={styles['card-info--container']}>
        <h1 className={styles['card-info--title']}>Improve your front-end skills by building projects</h1>
        <p className={styles['card-info--description']}>Scan the QR code to visit FrontEnd Mentor and take your coding skills to the next level.</p>
        </div>
      </div>
    </main>
  )
}
