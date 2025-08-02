function FilterTransacaoes(){
    let classButton = ' bg-sky-950 text-white  p-1 px-3 rounded-full'
    return(
        <section className="border-0 border-t-1 border-t-sky-200 ">
            <div className="border-2 w-100 border-sky-800 rounded-full p-2 m-auto flex justify-around mt-5">
                <button type="button" className={classButton}>Saída</button>
                <button type="button" className={classButton}>Entrada</button>
                <button type="button" className={classButton}>Investimento</button>
            </div>
        </section>
    )
}

export default FilterTransacaoes;

