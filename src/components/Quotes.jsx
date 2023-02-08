import { useState, useEffect } from "react";
import QuoteItems from "./QuoteItems";

export default function Quotes() {
	const url = `https://api.quotable.io/random?tags=love`;
	const [quote, setQuote] = useState(null);

	
	// creates random image
	const changeImage = () => {
		const totalBg = 10;
		const randBg = `bg${Math.ceil(Math.random() * totalBg)}.jpeg`;
		console.log(randBg);
		return randBg;
	};

	const getQuotes = () => {
		fetch(url)
			.then((data) => data.json())
			.then((res) => {
				const newBg = changeImage();
				document.querySelector(
					"body"
				).style.backgroundImage = `url('../assets/images/${newBg}')`;
				setQuote(res);
			})
			.catch((err) => console.error(err));
	};

	useEffect(getQuotes, []);

	return (
		<div className="min-h-screen flex justify-center items-center bg-cover bg-center main-body">
			<div className="bg-white opacity-75 md:w-[30rem] md:h-[30rem] w-[22rem] h-[22rem] rounded-xl bg">
				{!quote ? (
					<h1></h1>
				) : (
					<QuoteItems quote={quote.content} author={quote.author} />
				)}
				<div className="flex justify-center">
					<button
						onClick={getQuotes}
						className="text-pink-300 bg-white opacity-100 pt-3 px-1 rounded-md mt-[5rem] md:mt-[3rem] hover:-translate-y-1 hover:-translate-x-1 duration-300"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-10 h-10 animate-bounce"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
							/>
						</svg>
					</button>
				</div>
				<p className="flex flex-col italic font-small text-center md:mt-10 mt-2">
					-Miguel Camilo
					<a
						href="https://github.com/MiguelCamilo/ValentinesDay-Quote-Generator"
						target="_blank"
						className="italic font-small text-center text-blue-500 md:mt-5 mt-0 hover:-translate-y-1 duration-300"
					>
						Github
					</a>
				</p>
			</div>
		</div>
	);
}
