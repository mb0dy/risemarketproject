import './style.scss'

function Main() {
    function sayXuy(){
        alert("Зря зря зря");
    }
    return (
        <div>
            <div className='intro'>
                <h1 onClick={sayXuy}>Rise Market</h1>
            </div>
            <div className='main'>
                <div className='cards'>
                    <div className='card1'></div>
                    <div className="card2"></div>
                    <div className="card3"></div>
                    <div className="card4"></div>
                    <div className="card5"></div>
                    <div className="card6"></div>
                </div>
            </div>
        </div>
    );
}

export default Main