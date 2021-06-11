import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const getBooksQuery = gql`
{
	books {
		id
		name
		genre
		author {
			name
			age
		}
	}
}
`;

function BookList(props) {
	console.log(props);
	if (props.data.loading){
		return null;
	};

	return (
		<div id="book-list">
			<ul>
				{ props.data.books.map(book => {
					return <li key={book.id}>{book.name}</li>;
				})}
			</ul>
		</div>
	);
}

export default graphql(getBooksQuery)(BookList);
