import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Contact.module.css";
import Header from "@/components/Header";

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
        <img src="/Quack Attack Journey to the city.png"></img>
        <div className={styles.home}><p>Hello There </p></div>
      </main>
    </>
  );
}
