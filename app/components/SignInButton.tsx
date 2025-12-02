import { signIn } from "@/auth"
 
export default async function SignInButton() {
    async function handleSignIn() {
        await signIn("github", { redirectTo: "/dashboard"});
    }
    return (
        <form
            className="text-center m-[4vw]"
            action={async () => {
                "use server";
                await signIn("github", { redirectTo: "/dashboard"});
            }}
        >
        <button className="border rounded p-4 hover:text-blue-700 hover:border-blue-700 transition duration-150" type="submit">Signin with GitHub</button>
        </form>
    )
} 