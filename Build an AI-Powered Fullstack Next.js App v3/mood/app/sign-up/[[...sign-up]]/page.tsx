import { SignUp } from "@clerk/nextjs";

const signUpPage = () => {
  return <SignUp afterSignInUrl="/new-user" redirectUrl="/new-user" />;
};
export default signUpPage;
