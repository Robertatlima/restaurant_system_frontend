import { useState, FormEvent } from "react";
import Head from "next/head";

import { Header } from "../../components/Header";
import { setupApiClient } from "../../services/api";
import { canSSRAuth } from "../../utils/canSSRAuth";
import { toast } from "react-toastify";
import styles from "./styles.module.scss";

export default function Category() {
  const [nameCategory, setNameCategory] = useState("");

  async function handleRegister(event: FormEvent) {
    event.preventDefault();

    if (nameCategory === "") {
      return;
    }

    const apiServer = setupApiClient();
    await apiServer.post("/category", {
      name: nameCategory,
    });
    toast.success(`Categoria ${nameCategory} cadastrada`);
    setNameCategory("");
  }

  return (
    <>
      <Head>Categoria</Head>
      <div>
        <Header />
        <main className={styles.container}>
          <h1>Cadastrar categorias</h1>
          <form className={styles.form} onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Digite o nome da categoria"
              className={styles.input}
              value={nameCategory}
              onChange={(e) => setNameCategory(e.target.value)}
            />
            <button type="submit" className={styles.buttonAdd}>
              Cadastrar
            </button>
          </form>
        </main>
      </div>
    </>
  );
}
export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
