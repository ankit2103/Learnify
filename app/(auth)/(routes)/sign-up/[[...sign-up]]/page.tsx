import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return <SignUp redirectUrl="/dashboard" afterSignUpUrl="/dashboard" signInUrl="/sign-in" />;
}