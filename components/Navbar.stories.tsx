import type { Meta } from "@storybook/react";
import Navbar from "./Navbar";

const meta: Meta<typeof Navbar> = {
  title: "Components/Navbar",
  component: Navbar,
};

export default meta;

export const Default = () => <Navbar />;
