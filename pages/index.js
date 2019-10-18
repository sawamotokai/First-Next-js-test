import axios from 'axios';
import Link from 'next/link';
const Index = (quote) => {
	return (
		<div>
			<h1>{quote.content.rendered}</h1>
			<Link href="/">Get another quote</Link>
		</div>
	);
};

Index.getInitialProps = async () => {
	const res = await axios.get('https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand');
	const { data } = res;
	console.log(data);
	let idx = Math.floor(Math.random() * Object.keys(data).length);
	let quote = data[idx];
	console.log(idx);
	console.log(quote);
	return quote;
};

export default Index;
