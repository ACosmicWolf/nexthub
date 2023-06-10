import type { Meta } from "@storybook/react";
import {
  GithubSignInButton,
  GoogleSignInButton,
  SignInButton,
  SignUpButton,
} from "./Buttons";

const meta: Meta<typeof SignInButton> = {
  title: "Components/Buttons",
  component: SignInButton,
};

export default meta;

export const SignIn = () => <SignInButton />;
export const SignUp = () => <SignUpButton />;
export const Google = () => <GoogleSignInButton />;
export const Github = () => <GithubSignInButton />;
export const ProfileButton = () => <ProfileButton />;
