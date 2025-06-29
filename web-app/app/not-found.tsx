import { redirect } from "next/navigation";

/** 404 (not found) page */
const NotFoundPage = () => {
    redirect("/");
};

export default NotFoundPage;
