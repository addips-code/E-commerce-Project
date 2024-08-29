type Props = {
    searchParams: {
        q: string;
    }
}

function SearchPage({searchParams: { q }}: Props) {
    // Fetch the search results
  return (
    <div>SearchPage</div>
  )
}

export default SearchPage;