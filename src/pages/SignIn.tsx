import { FormEvent, useCallback, useState } from "react";
import { Checkbox } from "@radix-ui/react-checkbox";
import { Envelope, Lock } from "phosphor-react";
import axios from "axios"

import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { TextInput } from "../components/TextInput";
import { Text } from "../components/Text";

export const SignIn = () => {
  const [isUserSignedIn, setIsUserSignedIn] = useState<boolean>(false)

  const handleLogInUser = useCallback(async (event: FormEvent) => {
    event.preventDefault();

    await axios.post("/sessions", {
      email: "matheuswachcruz@gmail.com",
      password: "123456789"
    })

    setIsUserSignedIn(true);
  }, []);

  return (
    <div className="w-screen h-screen flex-col flex items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <img src="/react-logo.svg" alt="React logo" />

        <Heading className="mt-4" size="lg">
          Ignite Lab
        </Heading>
        <Text className="text-gray-400 mt-1" size="lg">
          Log in and start to use
        </Text>
      </header>

      <form
        onSubmit={handleLogInUser}
        className="mt-10 gap-4 flex flex-col items-stretch w-full max-w-[400px]"
      >
        {isUserSignedIn && <Text>You have successfully signed in</Text>}
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Email address</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              type="email"
              id="email"
              placeholder="Entry your email address"
            />
          </TextInput.Root>
        </label>
        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Your password</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              type="password"
              id="password"
              placeholder="************"
            />
          </TextInput.Root>
        </label>
        <label
          htmlFor="remember-password"
          className="mt-2 flex items-center gap-3"
        >
          <Checkbox id="remember-password" />
          <Text size="sm" className="text-gray-200">
            Remember my password
          </Text>
        </label>

        <Button type="submit" className="mt-4">
          Log in
        </Button>
      </form>

      <footer className="mt-8 flex flex-col items-center gap-4">
        <Text asChild size="sm">
          <a
            href="#"
            className="text-gray-400 underline hover:text-gray-200 transition-colors ease-linear duration-150"
          >
            I forgot my password
          </a>
        </Text>
        <Text asChild size="sm">
          <a
            href="#"
            className="text-gray-400 underline hover:text-gray-200 transition-colors ease-linear duration-150"
          >
            You don't have an account yet? Create yours now
          </a>
        </Text>
      </footer>
    </div>
  );
};
