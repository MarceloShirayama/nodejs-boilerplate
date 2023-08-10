import { a } from "./core/a";
import { Spread } from "@/shared";

console.log(a, process.env["CUSTOM_ENV"]);

type User = {
  name: string;
  age: number;
};

type Repository = {
  name: string;
  url: string;
};

type Github = {
  id: number;
  repos: Repository[];
};

type Arrow = "Up" | "Down" | "Left" | "Right";

type Button = "X" | "Y" | "A" | "B";

type PushButton = Spread<Arrow | Button>;

type UserRepository = Spread<User & Repository>;

type GithubUser = Spread<User & Github>;

const userRepository: UserRepository = {
  name: "Any Name",
  age: 10,
  url: "https://github.com/any_name/any_repository",
};

console.log({ userRepository });

const githubUser: GithubUser = {
  id: 1,
  name: "Any Name",
  age: 10,
  repos: [
    {
      name: "any_repository",
      url: "https://github.com/any_name/any_repository",
    },
  ],
};

console.log({ githubUser });

const button: PushButton = "Down";

console.log({ button });
