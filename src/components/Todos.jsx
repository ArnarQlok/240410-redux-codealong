const Todos = () => {
  return (
    <>
      <div className="self-center">Todos</div>
      <ul className="list-none">
        <li className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded">
          <div className="text-white">Jag är en todo</div>
          <button className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md">
            Delete
          </button>
        </li>
      </ul>
    </>
  );
};

export default Todos;
