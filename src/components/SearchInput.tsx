interface Props {
  input: string
  changeInput: (text: string) => void
  handleAdd: (e: React.FormEvent) => void
}

const SearchInput: React.FC<Props> = ({
  input,
  changeInput,
  handleAdd,
}: Props) => {
  return (
    <div className="flex justify-center mb-5">
      <div className="relative w-[30rem]">
        <form onSubmit={(e) => handleAdd(e)}>
          <input
            value={input}
            onChange={(e) => changeInput(e.target.value)}
            type="search"
            id="search"
            className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Todo"
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            GO
          </button>
        </form>
      </div>
    </div>
  )
}

export default SearchInput
