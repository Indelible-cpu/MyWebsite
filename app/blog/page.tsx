import { redirect } from "next/navigation";

// Keep existing /blog URLs working without maintaining a placeholder insights page.
export default function BlogRedirect() {
  redirect("/portfolio");
}
