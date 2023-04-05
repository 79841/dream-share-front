import * as React from "react";
import styled from "styled-components";
import useAuthForm from "@/lib/hooks/useAuthForm";
import { signUp } from "@/lib/queries/auth";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  background: #f2f2f2;
  z-index: 10000;
`;

const Container = styled.section`
  padding-top: 3rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 60rem;
  width: 35rem;
  background-color: #fff;
  box-shadow: 0 5px 10px 0 rgb(0 0 0 / 10%);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  border-radius: 2rem;
  z-index: 10000;
`;

const Logo = styled.img`
  height: 8rem;
  width: 8rem;
  z-index: 10000;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 25rem;
  width: 100%;
  z-index: 10000;
`;

const Input = styled.input`
  border: 0;
  background: #ddd;
  outline: none;
  height: 4.5rem;
  width: 27rem;
  z-index: 10000;
  margin: 0.5rem;
  border-radius: 5rem;
  padding: 0 2rem 0 2rem;
`;

const Button = styled.button`
  border: 0;
  background: #ca57ce;
  border-radius: 5rem;
  height: 4.5rem;
  width: 27rem;
  margin: 2rem;
  color: #fff;
`;

const SignUp = () => {
  const router = useRouter();
  const { values, handleChange } = useAuthForm({
    email: "",
    name: "",
    password: "",
  });

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const { data } = await signUp(values);
    router.push("/login");
  };

  return (
    <Wrapper>
      <Container>
        <Logo
          src={"https://avatars.githubusercontent.com/u/107689506?s=200&v=4"}
        />
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          <Input
            placeholder="Name"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          <Input
            placeholder="Password"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          <Button>Sign Up</Button>
        </Form>
      </Container>
    </Wrapper>
  );
};

export default SignUp;
