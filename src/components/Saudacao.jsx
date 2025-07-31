function Saudacao() {

    let paragrafo = 'Organize suas finanças de forma simples, prática e segura. Com o FinanLogic, você tem controle total sobre seus gastos e receitas para tomar decisões financeiras mais conscientes.'

    return(
        <section className="flex-1 flex items-center flex-col justify-center px-10">
            <article className="mx-auto">
                <img className="h-[120px]" src="../../src/assets/finanlogic_logo.png" alt="Logo FinanLogic" />
            </article>
            <article className=" mt-5">
                <h4 className="text-2xl font-bold text-sky-500  border-b-1 border-sky-950 mb-5">
                    Bem-vindo ao FinanLogic – seu gerenciador de finanças inteligente!
                </h4>
                <p className="mb-5">
                    {paragrafo}
                </p>

                <div className="points">
                    <h5 className="text-1xl font-bold text-sky-500 mb-2">Por que escolher o FinanLogic?</h5>
                    <ul className="list-none list-points">
                        <li>
                            Interface intuitiva e fácil de usar
                        </li>
                        <li>
                            Acompanhamento em tempo real das suas transações
                        </li>
                        <li>
                            Segurança e privacidade dos seus dados garantidas
                        </li>
                        <li>
                            Acesso rápido pelo computador ou celular
                        </li> 
                    </ul>
                </div>
            </article>
        </section>
    )
}

export default Saudacao;