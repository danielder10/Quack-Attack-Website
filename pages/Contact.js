import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Contact.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <Header/>
        <img src="/Quack Attack Journey to the city.png" />
        <div className={styles.home}>
          <form className={styles.contactForm}>
             <h1 className={styles.message}>Feel Free To Contact Us @QuackAttack</h1>
            <input type="text" placeholder="Name" className={styles.input} />
            <input type="email" placeholder="Email" className={styles.input} />
            <textarea placeholder="Message" className={styles.textarea}></textarea>
            <button type="submit" className={styles.button}>Submit</button>
          </form>
        </div>
        <Footer/>
      </main>
    </>
  );
}
