export default function QuoteItems({ quote, author }) {
	return (
		<div className="container md:mt-40 mt-10 text-center">
			<h2 className="text-black text-md italic">{`"${quote}"`}</h2>
			<h4 className="text-black italic font-extrabold">{`- ${author}`}</h4>
		</div>
	);
}