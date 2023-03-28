import Token from "@/types/token";
import axios from "axios";
import Head from "next/head";
import { useState } from "react";

export default function Admin() {

    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {

        event.preventDefault();

        try {

            await fetch("http://localhost:8080/login", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    username: 'admin',
                    password: password,
                }),
            })
            .then((response) => response.json())
            .then((data) => data as Token)
            .then((token) => console.log(token.token))

        } catch (error) {
          console.error(error);
        }
    };
    

    return (
        <>
            <Head>
                <title>Home</title>
                <link rel="icon" href="/avatar.jpg" />
            </Head>
            <div className="flex flex-col flex-grow justify-center items-center gap-6 max-w-xs">
                <div className="flex flex-col gap-4">
                    <p className="text-2xl font-bold">Admin Login</p>
                    <form onSubmit={handleSubmit}>
                        <label className="text-neutral-400" >Admin password</label>
                        <input onChange={(event) => setPassword(event.target.value)} className="border w-full h-12 rounded-xl px-3 bg-neutral-800 border-neutral-600 outline-none my-4" type="password" placeholder="Password" required />
                        <button className="bg-white rounded-xl text-base text-neutral-800 w-full h-12 font-semibold cursor-pointer hover:bg-neutral-100" type="submit">Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}