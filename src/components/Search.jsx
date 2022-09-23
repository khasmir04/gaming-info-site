const Search = (props) => {
  const { value, onChange } = props

  return (
    <div>
      <input
        className='nunito text-sm rounded-lg'
        type='text'
        value={value}
        onChange={onChange}
      ></input>
    </div>
  )
}

export default Search
