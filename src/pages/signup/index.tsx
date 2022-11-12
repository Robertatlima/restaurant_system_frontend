import { FormEvent, useContext, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";

import logoSvg from "../../../public/logo.svg";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";
import { AuthContext } from "../../contexts/AuthContext";
import { canSSRGuest } from "../../utils/canSSRGuest";
import styles from "../../../styles/Home.module.scss";

export default function SignUp() {
  const { signUp } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleSignUp(event: FormEvent) {
    event.preventDefault();
    if (name === "" || email === "" || password === "") {
      toast.error(`Preencha todos os campos`);
      return;
    }
    setLoading(true);

    let data = {
      name,
      email,
      password,
    };
    await signUp(data);
    setLoading(false);
  }

  return (
    <>
      <Head>
        <title>signup </title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoSvg} alt="Logo system" />
        <div className={styles.login}>
          <h1>Criando sua conta</h1>
          <form onSubmit={handleSignUp}>
            <Input
              placeholder="Nome da empresa"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="Digite seu email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Digite sua senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" loading={loading}>
              Cadastrar
            </Button>
          </form>
          <Link href="/" className={styles.text}>
            <span>Já possui uma conta? Clique aqui</span>
          </Link>
        </div>
      </div>
    </>
  );
}
export const getServerSideProps = canSSRGuest(async (ctx) => {
  return {
    props: {},
  };
});
