

function Tabbutton(props) {
    console.log(props);

    var event = props.onTab;
    var mesg = props.children;
    console.log(event, mesg);

    return (
        <div className="Tabbutton">
            <h2>Tabbutton</h2>
            <button onClick={() => event(mesg)}>click</button>

        </div>

    );
}

export default Tabbutton;