"use server";

import { redirect } from "next/navigation";

export const signupTologinRedirect = async () => {
	redirect("/login");
};

export const loginTohomeRedirect = async () => {
	redirect("/");
};
